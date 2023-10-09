import { useLoaderData, useParams } from "react-router-dom";


const EventDetails = () => {
    const { eventId } = useParams()
    const Events = useLoaderData()
    
    const event = Events.find(event => event.eventID == eventId)
    console.log(event)

    return (
        <div>
            <h1>Event Details page</h1>
        </div>
    );
};

export default EventDetails;