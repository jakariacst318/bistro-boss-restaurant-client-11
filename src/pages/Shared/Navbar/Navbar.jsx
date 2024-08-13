import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'> HOME</Link></li>
        <li><Link to='/contact-us'> CONTACT US</Link></li>
        <li><Link to='/dashboard'> DASHBOARD</Link></li>
        <li><Link to='/menu'> OUR MENU</Link></li>
        <li><Link to='/order/salad'> ORDER FOOD</Link></li>

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white  mx-auto max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-medium">
                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <Link to='/'>Bistro Boss</Link>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end mr-4">

                    {
                        user ? <> <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log out</button></>
                            : <> <Link to='/login'> LOGIN</Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;