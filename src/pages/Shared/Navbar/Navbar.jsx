import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'> HOME</Link></li>
        <li><Link to='/contact-us'> CONTACT US</Link></li>
        {/* <li><Link to='/dashboard'> DASHBOARD</Link></li> */}
        <li><Link to='/menu'> OUR MENU</Link></li>
        <li><Link to='/order/salad'> ORDER FOOD</Link></li>
        <li><Link to='/dashboard/cart'>
            <p className="flex items-center text-xl">
                <TiShoppingCart /><span className="ms-2 text-[#EEFF25]"> {cart.length}</span>
            </p>
        </Link></li>
        <li><Link to='/secret'>SECRET</Link></li>
       {
        user && isAdmin &&  <li><Link to='/dashboard/adminHome'>DASHBOARD</Link></li>
       }
       {
        user && !isAdmin &&  <li><Link to='/dashboard/userHome'>DASHBOARD</Link></li>
       }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white  mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-medium ">
                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Link to='/'>Bistro Boss</Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium items-center">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-4">

                    {
                        user ? <>
                            <div className="tooltip hover:tooltip-open tooltip-bottom" data-tip="Log out">
                                <button onClick={handleLogOut} className="btn btn-active  btn-ghost ">
                                    <span className="text-lg mr-2 ">{user?.displayName}</span>
                                    <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                                </button>
                            </div>
                        </>

                            : <> <Link to='/login'><span className="flex items-center">
                                <span className="text-2xl mr-2">
                                    <FaUserCircle />
                                </span> Log in
                            </span></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;