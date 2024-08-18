import { AiFillGoogleCircle } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSigIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSigIn = () => {
        googleSigIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })
            })
       
    }
    return (
        <div>
            <div className="text-4xl flex justify-center gap-x-4">
                <p className="hover:bg-[#D1A054] rounded-full hover:text-white"><CiFacebook /></p>

                <button onClick={handleGoogleSigIn} className="hover:bg-[#D1A054] rounded-full hover:text-white"><AiFillGoogleCircle /></button >

            </div>
        </div>
    );
};

export default SocialLogin;