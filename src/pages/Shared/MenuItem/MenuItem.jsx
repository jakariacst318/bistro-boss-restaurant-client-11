
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item
    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-24" src={image} alt="" />
            <div>
                <h2 className="uppercase  text-2xl">{name} ---------</h2>
                <p>{recipe}</p>
            </div>
            <h4 className="text-[#e7ad00] flex font-medium text-xl"><span>$</span> {price}</h4>
        </div>
    );
};

export default MenuItem;