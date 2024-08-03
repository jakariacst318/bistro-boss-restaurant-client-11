
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import banner from '../../../assets/shop/banner2.jpg'
import Cover from '../../Cover/Cover';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
// import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss- Order Food</title>
            </Helmet>

            <Cover
                background={banner}
                title={'order food'}
            ></Cover>

            <div className='uppercase font-medium mt-20 text-center '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    {/* salad items tab */}
                    <TabPanel>
                        {/* loop kore  */}
                        <OrderTab
                            items={salad}
                        ></OrderTab>

                        {/* repeat */}
                        {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-10'>
                            {
                                salad.map(item => <FoodCard
                                    key={item._id}
                                    item={item}></FoodCard>)
                            }
                        </div> */}
                    </TabPanel>

                    {/* pizza items tab */}
                    <TabPanel>
                        <OrderTab
                            items={pizza}
                        ></OrderTab>
                    </TabPanel>

                    {/* soup items tab */}
                    <TabPanel>
                        <OrderTab
                            items={soup}
                        ></OrderTab>
                    </TabPanel>

                    {/* dessert items tab */}
                    <TabPanel>
                        <OrderTab
                            items={dessert}
                        ></OrderTab>
                    </TabPanel>

                    {/* drinks items tab */}
                    <TabPanel>
                        <OrderTab
                            items={drinks}
                        ></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;