import { Link } from "react-router-dom";
import Cover from "../../Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {

    return (
        <div>
            <div className="mb-20">
                {title && <Cover background={coverImg} title={title}></Cover>}
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }

            </div>
            <div className="flex justify-center mb-14">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline  border-black border-0 border-b-4  hover:bg-gray-300 hover:text-black">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div >
    );
};

export default MenuCategory;