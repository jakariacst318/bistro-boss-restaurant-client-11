import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiBookReadFill } from "react-icons/ri";

//   BarChart
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { PieChart, Pie,  ResponsiveContainer } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




const AdminHome = () => {
    const { user, } = useAuth()
    const axiosSecure = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data

        }
    });

    // chat Data
    const { data: chatData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


    // custom shape for the BarChart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    //  Pie Chart With Customized Label

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chatData.map(data =>{
        return{name: data.category, value: data.revenue}
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
                        <span>{stats?.revenue}</span>
                        <span className="text-3xl text-[#ff00d3]"><FaCircleDollarToSlot /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Users</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats?.users}</span>
                        <span className="text-3xl text-[#ff00d3]"><FaUsers /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Orders</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats?.orders}</span>
                        <span className="text-3xl text-[#ff00d3]"><TbTruckDelivery /></span>
                    </div>
                </div>

                <div className="stat  bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="stat-figure text-secondary ">
                    </div>
                    <div className="stat-title text-white font-semibold text-lg">Menu Items</div>
                    <div className="stat-value flex gap-4 items-center">
                        <span>{stats?.menuItems}</span>
                        <span className="text-3xl text-[#ff00d3]"><RiBookReadFill /></span>
                    </div>
                </div>


            </div>

            {/* bar chat */}
            <div className="flex justify-between">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chatData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chatData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div className="w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;