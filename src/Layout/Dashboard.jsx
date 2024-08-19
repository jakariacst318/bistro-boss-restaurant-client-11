import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaBook, FaHome, FaList, FaUsers } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import useCart from "../Hooks/useCart";




const Dashboard = () => {

    const [cart] = useCart();

    /* admin value from the database  */

    const isAdmin = true

    return (
        <div className="flex">
            {/* dashboard site bar */}
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li className="text-2xl">
                                <NavLink to='/dashboard/adminHome'>  <span><FaHome /></span>Admin Home</NavLink>
                            </li>
                            <li className="text-2xl">
                                <NavLink to='/dashboard/addItems'>  <span><MdOutlineRestaurantMenu /></span> Add Items</NavLink>
                            </li>
                            <li className="text-2xl">
                                <NavLink to='/dashboard/manageItems'>  <span><FaList /></span>Manage Item</NavLink>
                            </li>
                            <li className="text-2xl">
                                <NavLink to='/dashboard/bookings'>  <span><FaBook /></span> Manage Bookings</NavLink>
                            </li>
                            <li className="text-2xl">
                                <NavLink to='/dashboard/users'>  <span><FaUsers /></span>All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li className="text-2xl">
                                    <NavLink to='/dashboard/userHome'>  <span><FaHome /></span>User Home</NavLink>
                                </li>
                                <li className="text-2xl">
                                    <NavLink to='/dashboard/cart'>  <span><TiShoppingCart /></span> My Cart ({cart.length}) </NavLink>
                                </li>
                                <li className="text-2xl">
                                    <NavLink to='/dashboard/reservation'>  <span><FaRegCalendarAlt /></span> Reservation</NavLink>
                                </li>
                                <li className="text-2xl">
                                    <NavLink to='/dashboard/review'>  <span><MdOutlineRateReview /></span>Add a Review</NavLink>
                                </li>
                                <li className="text-2xl">
                                    <NavLink to='/dashboard/bookings'>  <span><MdOutlineRestaurantMenu /></span> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/*shared nav link */}
                    <div className="divider bg-white h-1"></div>

                    <li className="text-2xl">
                        <NavLink to='/'>  <span><FaHome /></span> Home</NavLink>
                    </li>
                    <li className="text-2xl">
                        <NavLink to='/order/salad'>  <span><RiMenuUnfold3Line />
                        </span> Menu</NavLink>
                    </li>
                    <li className="text-2xl">
                        <NavLink to='/order/contact'>  <span><IoIosMail />
                        </span> Contact</NavLink>
                    </li>
                </ul>
            </div>


            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;