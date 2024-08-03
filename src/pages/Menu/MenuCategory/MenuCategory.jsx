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
                <div></div>
            </div>
        </div >
    );
};

export default MenuCategory;