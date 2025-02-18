import { useEffect, useState } from "react";
import useAxiosPublic from "../Hook/axiosPublic";

const JobApply = () => {
    const axios = useAxiosPublic();
    const [data, setData] = useState([]);
    const [emailDetails, setEmailDetails] = useState({
        subject: "",
        text: "",
        file: null
    });

    useEffect(() => {
        axios.get("/apply").then((res) => setData(res.data));
    }, [axios]);

    const handleSendMail = async (email) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("subject", emailDetails.subject);
        formData.append("text", emailDetails.text);
        if (emailDetails.file) {
            formData.append("file", emailDetails.file);
        }

        try {
            await axios.post("/apply/send-mail", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("Email sent successfully");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEmailDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setEmailDetails((prevDetails) => ({
            ...prevDetails,
            file: e.target.files[0]
        }));
    };

    return (
        <div className="container mx-auto mt-16 p-4">
            <h2 className="text-2xl font-semibold text-center mb-4">Job Applications</h2>
            <div className="mb-4">
                <input
                    type="text"
                    name="subject"
                    placeholder="Email Subject"
                    value={emailDetails.subject}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <textarea
                    name="text"
                    placeholder="Email Text"
                    value={emailDetails.text}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                />
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    className="border p-2 mb-2 w-full"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2 text-left">Full Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Experience</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                            <th className="px-4 py-2 text-left">Resume</th>
                            <th className="px-4 py-2 text-left">Job Name</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((applicant, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-4 py-2">{applicant.fullName}</td>
                                <td className="px-4 py-2">{applicant.email}</td>
                                <td className="px-4 py-2">{applicant.experience}</td>
                                <td className="px-4 py-2">{applicant.phone}</td>
                                <td className="px-4 py-2">
                                    <a
                                        href={applicant.resume}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        View Resume
                                    </a>
                                </td>
                                <td className="px-4 py-2">{applicant.jobName}</td>
                                <td className="px-4 py-2">
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                        onClick={() => {
                                        }}
                                    >
                                        Reject
                                    </button>
                                    <button
                                        className="px-4 py-2 ml-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                                        onClick={() => handleSendMail(applicant.email)}
                                    >
                                        Send Mail
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobApply;
