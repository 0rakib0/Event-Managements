import { PropTypes } from "prop-types";
import { FaCalendarAlt, FaLocationArrow, FaSitemap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
    const { name, shortDescription, bannerImage, date, location, totalSeats, eventID } = event
    return (
        <div className="rounded p-2 bg-base-100 shadow-xl">
            <div className="relative">
                <figure><img src={bannerImage} alt="Shoes" /></figure>
                <div className="flex items-center space-x-3 absolute text-white bg-primaryColor font-bold bottom-0 p-2 rounded-r-md">
                    <FaSitemap></FaSitemap>
                    <p>{totalSeats} Seat</p>
                </div>
            </div>
            <div className="">
                <div className="flex space-x-6 mt-2">
                    <div className="flex items-center">
                        <FaCalendarAlt className="text-primaryColor"></FaCalendarAlt>
                        <p>{date}</p>
                    </div>
                    <div className="flex items-center">
                        <FaLocationArrow className="text-primaryColor"></FaLocationArrow>
                        <p>{location}</p>
                    </div>
                </div>
                <h2 className="card-title my-2">{name}</h2>
                <p className="mb-2">{shortDescription}</p>
                <div className="card-actions justify-start">
                <Link to={`/details/${eventID}`}><button className="text-primaryColor text-md font-semibold btn-link">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object,
}

export default Event;