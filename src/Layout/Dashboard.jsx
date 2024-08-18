import { NavLink, Outlet } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaHome } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiMenuUnfold3Line } from "react-icons/ri";
import useCart from "../Hooks/useCart";




const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard site bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu">

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

                    <div className="divider bg-white h-1"></div>

                    <li className="text-2xl">
                        <NavLink to='/'>  <span><FaHome /></span> Home</NavLink>
                    </li>
                    <li className="text-2xl">
                        <NavLink to='/order/salad'>  <span><RiMenuUnfold3Line />
                        </span> Menu</NavLink>
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