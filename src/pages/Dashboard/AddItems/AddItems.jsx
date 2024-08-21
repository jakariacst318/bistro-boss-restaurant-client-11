
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)

        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the images url
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                // show success popup up
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
                reset()
            }
        }
        console.log(res.data)
    }


    return (
        <div>
            <SectionTitle
                subHeading={"What's new?"}
                heading={"ADD AN ITEM"}
            ></SectionTitle>

            {/*add to item form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Recipe name <span className="text-red-600 ">*</span></span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full " />
                    </div>

                    {/* category and price */}
                    <div className="flex gap-6">
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Category <span className="text-red-600 ">*</span></span>
                            </label>
                            <select defaultValue='default'  {...register("category", { required: true })}
                                className="select select-bordered  w-full ">
                                <option disabled value='default'>Select a Category </option>
                                <option value='pizza'>Pizza</option>
                                <option value='salad' >Salad</option>
                                <option value='soup'>Soup </option>
                                <option value='desserts'>Desserts</option>
                                <option value='drinks'>Drinks</option>
                            </select>

                        </div>
                        {/* price */}
                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Price <span className="text-red-600 ">*</span></span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full " />

                        </div>
                    </div>
                    {/* Recipe Details */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Recipe Details <span className="text-red-600 ">*</span></span>
                        </label>
                        <textarea {...register("recipe", { required: true })}
                            className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>

                    {/* recipe photo */}
                    <div className="form-control w-full mb-6">
                        <input  {...register("image", { required: true })}
                            type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button
                        className="btn text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">
                        Add Item <span className="ms-2"><FaUtensils /></span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;