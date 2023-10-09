import { useContext } from "react"
import { authContext } from "../../AuthProvider/AuthProvider"

const Profile = () =>{
    const {user} = useContext(authContext)
    return (
        <div className="w-2/4 mx-auto md:my-24 flex items-center gap-6">
            <div>
                <img src={user.photoURL} className="w-[200px] rounded-lg"  alt="" />
            </div>
            <div className="">
                <p className="text-2xl">Name: {user.displayName}</p>
                <p className="text-2xl">Email: {user.email}</p>
            </div>
        </div>
    )
}
export default Profile