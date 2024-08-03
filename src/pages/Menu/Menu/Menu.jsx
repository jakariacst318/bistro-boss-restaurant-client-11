import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg';
import dessertImage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../../assets/menu/soup-bg.jpg';
import saladImage from '../../../assets/menu/pizza-bg.jpg';
import soupImage from '../../../assets/menu/salad-bg.jpg';

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className="">

            {/* random title / helmet */}
            <Helmet>
                <title>Bistro Boss- Menu</title>

                {/* logo / favicon */}
                {/* <link rel="canonical" href="https://FAV-ICON.com/" /> */}
            </Helmet>

            {/*  cover photo */}
            <Cover
                background={menuImage}
                title={'our menu'}
            ></Cover>

            {/* section title */}
            <SectionTitle
                subHeading={"Don't miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>

            {/*main menu cover offered category  */}
            <MenuCategory items={offered}></MenuCategory>
            
            {/* dessert category */}
            <MenuCategory items={dessert}title="dessert"
                coverImg={dessertImage}
            ></MenuCategory>

            {/* pizza category */}
            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImage}
            ></MenuCategory>

            {/* salad category */}
            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImage}
            ></MenuCategory>

            {/* soup category */}
            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImage}
            ></MenuCategory>
        </div>
    );
};

export default Menu;