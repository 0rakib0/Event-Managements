import Pricing2 from "./Pricing2"

const Pricing = () => {

    const Pricing = [
        {
            name: 'Silver',
            Price: 300,
            facilities: [
                'Conference Ticket',
                
            ]
        },
        {
            name: 'Golden',
            Price: 500,
            facilities: [
                'Conference Ticket',
                'Free Certificate',
            ]
        },
        {
            name: 'Dimond',
            Price: 700,
            facilities: [
                'Conference Ticket',
                'Free Certificate',
                'Free Lunch & Coffe'
            ]
        },
    ]
    return (
        <div className="w-3/4 mx-auto my-12">
            <div className="grid md:grid-cols-3 gap-4">
                {
                    Pricing.map((price, idx) =><Pricing2 key={idx} pricing={price}></Pricing2>)
                }
            </div>
        </div>
    )
}


export default Pricing