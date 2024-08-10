import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import  useModerator from '../hooks/useModerator'
import { Navigate, useLocation } from "react-router-dom";

const ModeratorRouter = ({children}) => {
 
    const {user,loading} = useContext(AuthContext);
    const [isModerator, isModeratorLoading] = useModerator();
    const location = useLocation();
    if(loading || isModeratorLoading)
        {
            return <><span className="loading loading-spinner loading-lg"></span></>
        }
        if(user &&  isModerator )
            {
              return children;
            }
             
            return <Navigate to="/login" state={{ from: location }} replace />;   


};

export default ModeratorRouter;