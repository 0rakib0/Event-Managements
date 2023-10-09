import { FaArrowRight } from "react-icons/fa";

const Pricing2 = ({ pricing }) => {
    const { name, Price, facilities } = pricing
    return (
        <div className="border border-primaryColor rounded-b-3xl text-center pb-4 flex flex-col">
            <h1 className="text-4xl text-bold bg-primaryColor hover:text-textColor hover:bg-orange-200 rounded-b-3xl font-bold text-white py-4 border-b border-primaryColor">{name}</h1>
            <p className="text-2xl font-semibold mt-3">{Price}$</p>
            <ul className="text-center mx-4 my-2 text-lg flex-grow">
                {
                    facilities.map(faci =><div className="flex items-center gap-1">
                        <FaArrowRight className="text-primaryColor"></FaArrowRight> <li> {faci}</li>
                    </div>)
                }
            </ul>
            <button className="text-xl w-2/3 mx-auto bg-primaryColor py-2 px-4 rounded text-white mt-6">Buy Now</button>
        </div>
    )
}

export default Pricing2