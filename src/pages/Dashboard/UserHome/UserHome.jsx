import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
             <h2 className="text-3xl"> Hi Welcome: &nbsp; 
                <span className="text-[#e7ad00]">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </span>
            </h2>
            <h2> user Home </h2>
        </div>
    );
};

export default UserHome;