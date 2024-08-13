
import { CiFacebook } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import login from '../../assets/others/authentication2.png'
import { useContext, useEffect,  useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
    // const captchaRef = useRef(null) /* old */
    const [disable, setDisable] = useState(true)/* old */

    const { signIn } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Log in successfully"
                });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleValidateCaptcha = (e) => {
        const userCaptchaValue = e.target.value; 
        // const userCaptchaValue = captchaRef.current.value; /* old */


        if (validateCaptcha(userCaptchaValue)) {
            setDisable(false) /* old */
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Captcha in successfully"
            });

        }

        else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Captcha Does Not Match"
            });
        }
        // captchaRef.current.value = ('')
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss - Login</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left">

                        <img src={login} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold  pt-2 text-center">Login</h1>
                        <form onSubmit={handleLogin} className="card-body pb-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt font-semibold link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control font-semibold">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input  onBlur={handleValidateCaptcha} type="text"  name='captcha' placeholder="type the captcha" className="input input-bordered" />

                                <p  className="btn btn-outline btn-sm mt-3">Validate Captcha</p>
                               
                                {/* <button onClick={handleValidateCaptcha} className="btn btn-outline btn-sm mt-3">Validate Captcha</button>  */} {/* old */}

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable}  className='btn bg-[#D1A054] text-white hover:bg-[#1F2937]' type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='text-center mb-5'>
                            <h2 className="text-lg">New here? <span className="font-semibold text-[#D1A054]"><Link to='/signup' >Create a New Account</Link></span></h2>
                            <p className="font-semibold text-xl py-3">Or sign in with</p>
                            <div className="text-4xl flex justify-center gap-x-4">
                                <p className="hover:bg-[#D1A054] rounded-full hover:text-white"><CiFacebook /></p>
                                <p className="hover:bg-[#D1A054] rounded-full hover:text-white"><AiFillGoogleCircle /></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;