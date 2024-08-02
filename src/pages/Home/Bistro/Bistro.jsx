
import hand from '../../../assets/home/hand.png'

const Bistro = () => {
    return (
        <div>

            <div className=" relative ">
                <div>
                    <img src={hand} alt="img" />
                </div>
                <div className='text-center rounded-md md:mx-20 mx-5 lg:p-12 md:p-6 bg-slate-100 absolute  md:top-1/3 top-1/4 p-2'>
                    <h1 className='text-2xl font-medium md:mb-3'>Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default Bistro;