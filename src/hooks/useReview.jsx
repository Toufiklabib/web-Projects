import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useReview = () => {

    const axiosPublic = useAxiosPublic();
   
  const {data: review =[] , isLoading: loading , refetch}  = useQuery({
    queryKey:['Review'],
    queryFn: async () =>{
        const res = await axiosPublic.get('/reviwes')
        
        return res.data;
          
    }
  })
 
  return [review,loading,refetch];

};

export default useReview;