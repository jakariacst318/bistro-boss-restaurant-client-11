import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const Cart = () => {

    const [cart ,refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const totalPriceFixed = totalPrice.toFixed(2)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
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
                subHeading={"My Cart"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>

            <div className="flex justify-evenly mb-10">
                <h2 className="text-3xl font-medium">Total orders: {cart.length}</h2>
                <h2 className="text-3xl font-medium">Total Price:$ {totalPriceFixed}</h2>
                <button className="btn bg-[#D1A054] text-white hover:bg-[#1F2937]"> PAY</button>
            </div>

            {/* cart */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead className="font-semibold text-xl bg-[#D1A054]  text-white ">
                        <tr >
                            <th>
                                #
                            </th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2 className="font-bold">{item.name}</h2>
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
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

export default Cart;