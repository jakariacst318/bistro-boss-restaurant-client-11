import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import img1 from '../../../assets/menu/pizza-bg.jpg'
import img2 from '../../../assets/menu/salad-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'

const Recommends = () => {
    return (
        <div className="mt-20">
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img2}
                            alt="pizza"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img1}
                            alt="salad"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={img3}
                            alt="soup"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">soup</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
                        <div className="card-actions">
                            <button className="btn text-[#BB8506] 
                         hover:bg-[#1F2937] border-[#BB8506] bg-[#ebe7e2] border-0 border-b-4    uppercase">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recommends;