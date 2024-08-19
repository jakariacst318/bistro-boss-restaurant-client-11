import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users'/* ,{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            }  axios hook us kora hoice pore tar jonno comment kore rakhlam*/);
            return res.data
        }

    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been Admin saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: `${user.name} is an Admin Now`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div>
            <SectionTitle
                subHeading={"HOW MANY ?"}
                heading={"MANAGE ALL USERS"}
            ></SectionTitle>

            <div>
                <h2 className="text-3xl mb-5">Total Users: <span>{users.length}</span></h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className="font-semibold text-xl bg-[#D1A054]  text-white">
                        <tr>
                            <th>No</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTIVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td className="font-medium">{user.name}</td>
                                <td className="font-medium">{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? <span className="font-medium text-[#00A300] text-lg">Admin</span> :
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn bg-[#e9810b] text-2xl hover:bg-[#1F2937] text-white "><FaUsers />
                                        </button>
                                    }
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDeleteUser(user)}
                                        className="btn bg-red-600 text-2xl hover:bg-[#1F2937] text-white "><RiDeleteBinLine /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;