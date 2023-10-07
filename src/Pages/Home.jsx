import { useEffect } from "react";
import { useState } from "react";
import Event from "./Event";
import Shecdule from "./shecdule";

const Home = () => {

    const [events, setEvents] = useState([])
    const [length, setLenght] = useState(8)


    const shedule = [
        {
            name: 'John',
            title: 'Marketing',
            profile:'https://www.kekstcnc.com/media/5795/adam-hedengren-deria_596x540.jpg?anchor=center&mode=crop&width=380&height=460&rnd=133190387030000000',
            time: '11.30 AM - 12.30 PM'

        },
        {
            name: 'Karly Q Link',
            title: 'Developing',
            profile:'https://i.insider.com/5899ffcf6e09a897008b5c04?width=1000&format=jpeg&auto=webp',
            time: '12.30 AM - 1.30 PM'

        },
        {
            name: 'Olivia Hold',
            title: 'Managment',
            profile:'https://acsjournals.onlinelibrary.wiley.com/cms/asset/eb558050-1e4c-4b14-a41b-da0d4a6fd8f5/cncr34536-fig-0001-m.jpg',
            time: '2.30 AM - 3.30 PM'

        },
        {
            name: 'Anne Meri',
            title: 'Automation',
            profile:'https://i1.rgstatic.net/ii/profile.image/1005606894829575-1616766775345_Q512/Tais-Galvao.jpg',
            time: '3.30 AM - 4.30 PM'

        },
        
    ]

    useEffect(() => {
        fetch('Events.json')
            .then(response => response.json())
            .then(data => setEvents(data))
    }, [])


    return (
        <div>
            <div>
                <div className="carousel w-full h-[80vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://zoo-de-mack.com/wp-content/uploads/2018/02/slider_bg-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://zoo-de-mack.com/wp-content/uploads/2018/02/slider_bg-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://zoo-de-mack.com/wp-content/uploads/2018/02/slider_bg-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://zoo-de-mack.com/wp-content/uploads/2018/02/slider_bg-2.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Events Section */}
            <div className="my-6 w-11/12 mx-auto">
                <div className="text-center">
                    <span className="text-2xl text-primaryColor font-semibold">Event</span>
                    <h1 className="text-4xl font-bold my-2">BUSSINESS EVENT</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {
                        events.slice(0, length).map(event => <Event key={event.eventID} event={event}></Event>)
                    }
                </div>
        
                <div className={`flex justify-center ${length === events.length && 'hidden'}`}>
                    <button onClick={()=>setLenght(events.length)} className="bg-primaryColor px-14 text-white my-4 mx-auto py-2 rounded-md">See All</button>
                </div>
            </div>

            {/* Events Shedule */}
            <div className="my-12 w-11/12 mx-auto">
                <div className="text-center">
                    <span className="text-2xl text-primaryColor font-semibold">Schedule</span>
                    <h1 className="text-4xl font-bold my-2">RECENT EVENT SCHEDULE</h1>
                    <h1 className="text-2xl font-semibold">08 OCTOBER 2021</h1>
                </div>
                <div className="">
                    {
                        shedule.slice(0, 2).map((shedule, idx) =><Shecdule key={idx} shecdule={shedule}></Shecdule>)
                    }
                </div>
                <div className="grid grid-cols-3 my-6 border-2 border-primaryColor">
                    <div className="bg-primaryColor text-white text-2xl font-semibold text-center py-4">
                        <h1>1.30 PM - 2.30 PM</h1>
                        <p>Room No - 09</p>
                    </div>
                    <div className="col-span-2 py-8 text-center">
                        <h1 className="text-2xl font-semibold">Lunch Time</h1>
                    </div>
                </div>
                <div className="">
                    {
                        shedule.slice(2, 4).map((shedule, idx) =><Shecdule key={idx} shecdule={shedule}></Shecdule>)
                    }
                </div>
            </div>
        </div>


    );
};

export default Home;