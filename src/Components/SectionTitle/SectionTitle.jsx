
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center sm:w-8/12 md:w-4/12 my-8">
            <p className="text-xl font-medium text-[#e7ad00] mb-2 italic">--- {subHeading} --- </p>
            <h1 className="text-3xl font-medium uppercase border-b-4 border-[#dbdbdb] py-2">{heading}</h1>
        </div>
    );
};

export default SectionTitle;