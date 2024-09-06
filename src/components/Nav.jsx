import Icon from "./Icon"
import { useAuthUpdateContext } from "../utils/authContext"
// import {Link} from "react-router-dom"
function Navbar ({username}){
    const handleLogout = useAuthUpdateContext()
    return(
        <nav className="w-[100vw] h-12  flex items-center justify-between p-3 bg-white" >
            <Icon/> 
            <div className="w-[40%]  flex justify-between p-3">
                <ul>need help?</ul>
                <ul>read our blogs</ul>
                <ul className=" w- fit flex hover:cursor-pointer"> 
                    <div className="w-[24px] h-[24px]  rounded-full border mr-2 bg-black"></div>
                    <div>{username}</div>
                    
                </ul>
                <ul >
                    <button className=" border bg-red-700 font-bold text-white px-1 rounded-md" onClick={()=>handleLogout(false)}>log out</button></ul>
            </div>
        </nav>
            
    )
}
export default Navbar