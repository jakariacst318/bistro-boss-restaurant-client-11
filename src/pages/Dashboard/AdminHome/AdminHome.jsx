import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiBookReadFill } from "react-icons/ri";
// import { Radio } from "react-loader-spinner";

const AdminHome = () => {
    const { user, } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data
            // if (loading) {
            //     return <div className="flex justify-center pt-28">
            //         <Radio
            //             visible={true}
            //             height="80"
            //             width="80"
            //             color="#4fa94d"
            //             ariaLabel="radio-loading"
            //             wrapperStyle={{}}
            //             wrapperClass=""
            //         />
            //     </div>
            // }
            // else{
            //     return res.data
            // }
        }
    })

    return (
        <div>
            <h2 className="text-3xl"> Hi Welcome: &nbsp;
                <span className="text-[#e7ad00]">
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </span>
            </h2>
            <h2 className="text-[#e7ad00] text-3xl py-10"> Admin Page </h2>


            <div className="stats shadow grid grid-rows-2 md:grid-rows-1">

                <div className="stat  bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Revenue</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats.revenue}</span>
                        <span className="text-3xl text-[#ff00d3]"><FaCircleDollarToSlot /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Users</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats.users}</span>
                        <span className="text-3xl text-[#ff00d3]"><FaUsers /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Orders</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats.orders}</span>
                        <span className="text-3xl text-[#ff00d3]"><TbTruckDelivery /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Menu Items</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats.menuItems}</span>
                        <span className="text-3xl text-[#ff00d3]"><RiBookReadFill /></span>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AdminHome;