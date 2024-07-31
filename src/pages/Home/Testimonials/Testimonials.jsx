import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import verctor from './Vector (1).png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="mb-20">
            <SectionTitle
                subHeading={'what our clients say'}
                heading={'Testimonials'}
            ></SectionTitle>
            {/* <h2>review: {review.length}</h2> */}
            <Swiper navigation={true} modules={[Navigation]}

                className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="mx-24 my-12 flex flex-col items-center space-y-5">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="flex gap-2">
                                <img className="w-5" src={verctor} alt="" />
                                <img className="w-5" src={verctor} alt="" />
                            </div>
                            <p className="px-5 text-center">{review.details}</p>
                            <h2 className="text-[#e7ad00] text-2xl font-semibold ">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;