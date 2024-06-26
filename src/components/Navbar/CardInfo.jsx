import { FaSignInAlt } from "react-icons/fa";
import Button from "../Buttons/Button";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CardInfo = () => {
    const navigate = useNavigate()
    const {user, logout} = useContext(AuthContext);

    const handlerLogout = async ()=> {
        const response = await logout();
        if(!response.success) return console.log(response.error);
        navigate('/login');
    }
    
    const showName = user.displayName || user.email;
    
    return (
        <div className='grid grid-cols-5 w-72 bg-blue-100 shadow-lg rounded-md cursor-pointer p-3'>
            <div className="col-span-4 flex items-center justify-between">
                <div className="text-blue-950">
                    <h4 className="font-semibold">{user && showName}</h4>
                    <p className="text-sm">Lorem ipsum dolor sit.</p>
                </div>

            </div>
            <div className="col-span-1 flex items-center justify-center">
                <div>
                    <Button onClick={handlerLogout}><FaSignInAlt /></Button>
                </div>
            </div>
        </div>
    )
}

export default CardInfo;