import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const { eventId } = useParams()
    const Events = useLoaderData()
    console.log(eventId)
    console.log(Events)
    return (
        <div>
            <h1>Event Details page</h1>
        </div>
    );
};

export default EventDetails;