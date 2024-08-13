
import login from '../../assets/others/authentication2.png'
import { CiFacebook } from "react-icons/ci";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} =  useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss - sing up</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img src={login} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1 className="text-5xl font-bold  pt-2 text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name='name' placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600  font-semibold'> Name is Required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600 font-semibold'> Email is Required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@.+#_$=!%*?&^])/
                                })} placeholder="Password" className="input input-bordered" />

                                {errors.password?.type === 'minLength' && <p className='text-red-600 font-semibold my-2'>Password must be 8 Characters</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-red-600 font-semibold my-2'>Password max 20 Characters</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600 font-semibold my-2'> Strong Password? one uppercase, one lowercase,one symbol one number </p>}

                                <label className="label">
                                    <a href="#" className="label-text-alt font-semibold link link-hover ">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-[#D1A054] text-white hover:bg-[#1F2937]' type="submit" value="Sign Up" />
                            </div>
                        </form>

                        <div className='text-center mb-5'>
                            <h2 className="text-lg">Already registered? <span className="font-semibold text-[#D1A054]"><Link to='/login' > Go to log in</Link></span></h2>
                            <p className="font-semibold text-xl py-3">Or sign up with</p>
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

export default SignUp;