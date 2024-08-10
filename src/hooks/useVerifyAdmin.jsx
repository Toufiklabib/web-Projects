import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useVerifyAdmin = () => {
    const axoisPublicLink = useAxiosPublic();
    const { data : verifyEmail =[] , refetch  } = useQuery({
        queryKey:['/VerfyUserAdmin'],
        queryFn : async ()=>{
         const res = await axoisPublicLink.get('/VerfyUserAdmin')

         return res.data;

        }
    })
 
  return [verifyEmail , refetch ];

};

export default useVerifyAdmin;