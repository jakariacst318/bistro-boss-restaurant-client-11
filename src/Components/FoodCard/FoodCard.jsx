// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
// import axios from "axios"; /* hook us korbo */

const FoodCard = ({ item }) => {
    // const {user}  = useContext(AuthContext) /* hook us korbo */
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const [ , refetch] = useCart();

    const { name, image, recipe, price, _id } = item;


    const handleAddToCard = () => {
        // console.log('apni sir',user.email,food)
        if (user && user.email) {
            // send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            /* hook */
            // backend data send kora
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 2500
                        });
                        // refetch cart to update the cart item count
                        refetch();
                    }
                })
            /* fetch, axios */
            // axios.post('http://localhost:5000/carts', cartItem) 
            // .then(res =>{
            //     console.log(res.data)
            //     if(res.data.insertedId){
            //         Swal.fire({
            //             position: "top-end",
            //             icon: "success",
            //             title: `${name} added to the cart`,
            //             showConfirmButton: false,
            //             timer: 2500
            //           });
            //     }
            // })
        }
        else {
            Swal.fire({
                title: "You are not Logged",
                text: "Please login to add the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send to the login page
                    navigate('/login', { state: { from: location } })
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                }
            });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="img" className="rounded-xl " />
                </figure>
                <p className="absolute right-0 mr-14 mt-14 bg-[#1F2937] text-white px-4 py-2  rounded-lg">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={handleAddToCard}
                            className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button>

                        {/*  <button onClick={() => handleAddToCard(item)}
                            className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;