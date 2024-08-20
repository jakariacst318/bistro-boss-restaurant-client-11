import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {

    const [menu, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });                   
                }
                // console.log(res.data)
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }

    // const handleItemUpdate = (item) => {

    // }

    return (
        <div>
            <SectionTitle
                subHeading={"Hurry up"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTitle>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className="font-semibold text-xl bg-[#D1A054]  text-white">
                        <tr>
                            <th>No</th>
                            <th>IMAGE</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="item photo" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-medium">{item.name}
                                </td>
                                <td className="font-medium">{item.price}</td>
                                <td>
                                    <button
                                        /* onClick={() => handleItemUpdate(item)} */
                                        className="btn bg-[#e9810b] text-2xl hover:bg-[#1F2937] text-white "><FaEdit />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn bg-red-600 text-2xl hover:bg-[#1F2937] text-white "><RiDeleteBinLine /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;