import { useLoaderData, useParams } from "react-router-dom";
import { FaCalendarAlt, FaLocationArrow, FaSitemap } from "react-icons/fa";


const EventDetails = () => {
    const { eventId } = useParams()
    const Events = useLoaderData()

    const event = Events.find(event => event.eventID == eventId)
    console.log(event)

    return (
        <div className="w-3/4 mx-auto grid py-12 md:grid-cols-3 my-6 md:gap-4">
            <div className="">
                <img src={event.bannerImage} alt="" />
            </div>
            <div className="md:col-span-2">
                <h4 className="text-3xl font-bold">{event.name}</h4>
                <p className="md:w-2/5 mt-2 text-md">{event.shortDescription}</p>
                <div className="flex space-x-6 mt-2">
                    <div className="flex items-center gap-2">
                        <FaCalendarAlt className="text-primaryColor"></FaCalendarAlt>
                        <p>{event.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationArrow className="text-primaryColor"></FaLocationArrow>
                        <p>{event.location}</p>
                    </div>
                </div>
                <div className="flex items-center w-[150px] space-x-3 text-white bg-primaryColor font-bold bottom-0 p-2 rounded-md mt-4">
                    <FaSitemap></FaSitemap>
                    <p>{event.totalSeats} Seat</p>
                </div>
                <div className="flex items-center text-center w-[150px] space-x-3 text-white bg-primaryColor font-bold bottom-0 p-2 rounded-md mt-4">
                    <p>Book Now</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;