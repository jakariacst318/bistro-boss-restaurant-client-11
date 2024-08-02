
import Banner from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Bistro></Bistro>
           <PopularMenu></PopularMenu>
           <Recommends></Recommends>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;