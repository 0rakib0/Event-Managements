import { PropTypes } from "prop-types";
const Shecdule = ({ shecdule }) => {
    const { name, profile, title, time  } = shecdule
    return (
        <div className="grid grid-cols-3 my-4 bg-base-100 shadow-xl border-2 border-primaryColor">
            <img src={profile}  className="h-[100px] mx-auto my-auto" alt="Shoes" />
            <div className=" bg-primaryColor col-span-2 text-white text-center">
                <h2 className="text-2xl font-semibold mt-4">{time}</h2>
                <h2 className="text-4xl font-bold my-2">{name}</h2>
                <p className="mb-2">{title}</p>
                <div className="card-actions justify-end">
                    
                </div>
            </div>
        </div>
    );
};

Shecdule.propTypes = {
    shecdule: PropTypes.object,
}

export default Shecdule;