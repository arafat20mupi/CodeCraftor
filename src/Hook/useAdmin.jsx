import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosPublic from "./axiosPublic";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.uid) {
            setLoading(false);
            return;
        }

        axiosPublic.get('/api/users')
            .then(res => {
                const currentUser = res.data.users.find(u => u.uid === user.uid);
                setRole(currentUser ? currentUser.role : "user"); 
            })
            .catch(err => {
                console.error("Error fetching users:", err);
                setRole("user"); 
            })
            .finally(() => setLoading(false));
    }, [user?.uid, axiosPublic]);

    return { role, loading };
};

export default useAdmin;