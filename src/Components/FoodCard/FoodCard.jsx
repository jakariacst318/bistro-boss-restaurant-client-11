
const FoodCard = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src={image}alt="img" className="rounded-xl " />
                </figure>
                <p className="absolute right-0 mr-14 mt-14 bg-[#1F2937] text-white px-4 py-2  rounded-lg">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;