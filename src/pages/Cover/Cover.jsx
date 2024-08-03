


const Cover = ({background, title}) => {
    return (
        <div
            className="hero h-[700px]"
            style={{
                backgroundImage: `url("${background}")`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center  ">
                <div className="uppercase  bg-[#151515]  bg-opacity-60 py-28 lg:px-60 md:px-40 px-20">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 ">
                        would you like to try a dish
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Cover;