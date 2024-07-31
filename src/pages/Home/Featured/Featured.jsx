import moment from "moment";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTitle
                subHeading={'check it out'}
                heading={'featured item'}
            ></SectionTitle>
            <div className="md:flex items-center justify-center gap-10 text-white bg-slate-700 opacity-60  py-20 md:px-32 px-10">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="mt-2 space-y-2">
                    <h2 className="text-2xl font-medium">{moment().format('MMMM D YYYY')}</h2>
                    <h2 className="text-2xl font-medium"> WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline text-white border-black border-0 border-b-4 border-white hover:bg-gray-300 hover:text-black">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;