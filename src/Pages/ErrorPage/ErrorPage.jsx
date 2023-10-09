import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="w-3/4 mx-auto mt-12">
            <div>
                <img src="https://media.istockphoto.com/id/1149316411/vector/concept-404-error-page-flat-cartoon-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=dLlOE7s6GuI4a5so_ipUFHeW9kaFWZVf-JTrFu5rAIk=" className="w-2/5 mx-auto" alt="" />
            </div>
            <div className="flex justify-center mt-4">
                <Link to='/'><button className="text-2xl bg-primaryColor text-white py-2 px-4 rounded-md">BACK HOME</button></Link>
            </div>
        </div>
    )
}

export default ErrorPage