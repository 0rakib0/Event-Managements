import { useEffect } from "react";
import { useState } from "react";
import Event from "./Event";
import Shecdule from "./shecdule";
import { Link } from "react-router-dom";

const Home = () => {

    const [events, setEvents] = useState([])
    const [length, setLenght] = useState(8)


    const shedule = [
        {
            name: 'John',
            title: 'Marketing',
            profile: 'https://www.kekstcnc.com/media/5795/adam-hedengren-deria_596x540.jpg?anchor=center&mode=crop&width=380&height=460&rnd=133190387030000000',
            time: '11.30 AM - 12.30 PM'

        },
        {
            name: 'Karly Q Link',
            title: 'Developing',
            profile: 'https://i.insider.com/5899ffcf6e09a897008b5c04?width=1000&format=jpeg&auto=webp',
            time: '12.30 AM - 1.30 PM'

        },
        {
            name: 'Olivia Hold',
            title: 'Managment',
            profile: 'https://acsjournals.onlinelibrary.wiley.com/cms/asset/eb558050-1e4c-4b14-a41b-da0d4a6fd8f5/cncr34536-fig-0001-m.jpg',
            time: '2.30 AM - 3.30 PM'

        },
        {
            name: 'Anne Meri',
            title: 'Automation',
            profile: 'https://i1.rgstatic.net/ii/profile.image/1005606894829575-1616766775345_Q512/Tais-Galvao.jpg',
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
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230301/pngtree-businessman-ready-for-new-challenges-in-business-concept-photo-image_1728211.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">EVENT & <span className="text-primaryColor">CONFARENCE</span></h1>
                        <p className="mb-5 text-semibold">Experience seamless networking with our top-notch facilities: modern conference rooms, complimentary high-speed Wi-Fi, and delicious catering services.</p>
                        <Link to='/pricing'><button className="btn btn-primary">Price Details</button></Link>
                    </div>
                </div>
            </div>

            {/* Events Section */}
            <div className="my-6 w-11/12 mx-auto">
                <div className="text-center">
                    <span className="text-2xl text-primaryColor font-semibold">Event</span>
                    <h1 className="text-4xl font-bold my-2">EVENT SERVISES</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {
                        events.slice(0, length).map(event => <Event key={event.eventID} event={event}></Event>)
                    }
                </div>

                <div className={`flex justify-center ${length === events.length && 'hidden'}`}>
                    <button onClick={() => setLenght(events.length)} className="bg-primaryColor px-14 text-white my-4 mx-auto py-2 rounded-md">See All</button>
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
                        shedule.slice(0, 2).map((shedule, idx) => <Shecdule key={idx} shecdule={shedule}></Shecdule>)
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
                        shedule.slice(2, 4).map((shedule, idx) => <Shecdule key={idx} shecdule={shedule}></Shecdule>)
                    }
                </div>
            </div>

            {/* Speaker Section */}
            <div className="my-6 w-11/12 mx-auto">
                <div className="text-center">
                    <span className="text-2xl text-primaryColor font-semibold">Speakers</span>
                    <h1 className="text-4xl font-bold my-2">TALENTED SPEAKER</h1>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div>
                            <img src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-2.png" className="w-full" alt="" />
                            <div className="bg-primaryColor py-2 rounded-b-lg text-white">
                                <h1 className="text-2xl font-semibold">Scarlett Eleanor</h1>
                                <p>Marketing</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-3.png" className="w-full" alt="" />
                            <div className="bg-primaryColor py-2 rounded-b-lg text-white">
                                <h1 className="text-2xl font-semibold">Jacob Logan</h1>
                                <p>Business Manager</p>
                            </div>
                        </div>
                        <div className="bg-primaryColor rounded-b-lg text-white">
                            <img src="https://demo.egenslab.com/html/eventlab/assets/images/speaker/speaker-1.png" className="w-full" alt="" />
                            <div>
                                <h1 className="text-2xl font-semibold">Santiago Axel</h1>
                                <p>Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Test monial Section */}
            <div className="my-6 w-11/12 mx-auto grid md:grid-cols-2 items-center ">
                <div className="px-6">
                    <span className="text-2xl text-primaryColor font-semibold">Testimonial</span>
                    <h1 className="text-4xl font-bold my-2">WHAT PEOPLE SAY ABOUT EVENTLAB.</h1>
                    <p>Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut sollicitudin ut sollicitudin.</p>
                </div>

                <div className="border rounded border-primaryColor py-12 px-6 mt-6">
                    <div className="flex items-center gap-4 my-4">
                        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" className="w-24" alt="" />
                        <div className="flex items-center flex-col">
                            <h1 className="text-xl font-bold">Jhon Abrar</h1>
                            <p>Marketing</p>
                        </div>
                    </div>
                    <div>
                        <p className="pr-6">Cras semper, massa vel aliquam luctus, eros odio tempor turpis, ac placerat metus tortor eget magna. Donec mattis posuere pharetra. Donec vestibulum ornare velit ut.</p>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default Home;