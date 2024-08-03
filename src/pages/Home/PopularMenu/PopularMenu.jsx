import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={'Popular items'}
                heading={'from our menu'}
            >
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline  border-black border-0 border-b-4  hover:bg-gray-300 hover:text-black">View Full  Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;