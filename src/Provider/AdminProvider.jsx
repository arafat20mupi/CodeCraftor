import useAdmin from "../Hook/useAdmin";

const AdminProvider = ({ children }) => {
    const { role, loading } = useAdmin();
    console.log(role)
    if (!role) {
        return <div className="justify-center text-center flex items-center mt-40 w-full">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (loading) {
        return <div className="justify-center text-center flex items-center mt-40 w-full">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (role === 'admin') {
        return children;
    }

    return null;
};

export default AdminProvider;