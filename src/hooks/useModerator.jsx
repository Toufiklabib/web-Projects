import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useModerator = () => {
   
  const {user, loading} = useContext(AuthContext);
  const axiosLink = useAxios();
  const {data : isModerator, isPending : isModeratorLoading } = useQuery({
    enabled: !loading,
    queryKey: [user?.email , "isModerator"],
    queryFn : async ()=>{
      
        const res =  await axiosLink.get(`/users/moderator/${user.email}`)
        console.log(res.data.moderator)
        return res.data?.moderator ;

    }
 

  })

  return [isModerator, isModeratorLoading];




};

export default useModerator;