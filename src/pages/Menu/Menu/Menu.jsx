import { Helmet } from 'react-helmet-async';
import Cover from '../../Cover/Cover';
import menuImage from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
            <div className="">
                <Helmet>
                    <title>Bistro Boss- Menu</title>
                    {/* <link rel="canonical" href="https://FAV-ICON.com/" /> */}
                </Helmet>

                <Cover
                    background={menuImage}
                    title={'our menu'}
                ></Cover>
                <PopularMenu></PopularMenu>
                <Cover
                    background={menuImage}
                    title={'our menu'}
                ></Cover>
                <PopularMenu></PopularMenu>
                <Cover
                    background={menuImage}
                    title={'our menu'}
                ></Cover>
                <PopularMenu></PopularMenu>
            </div>
    );
};

export default Menu;