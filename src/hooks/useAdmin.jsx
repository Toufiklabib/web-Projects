import { useQuery } from "@tanstack/react-query";

import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const useAdmin = () => {
    const axiosSecure = useAxios();
    

   const {user ,loading} = useContext(AuthContext);
  const { data : isAdmin , isPending :isAdminLoading } = useQuery({
    queryKey:[user?.email , "isAdmin" ],
   enabled: !loading,
    queryFn: async () =>{
         const res = await axiosSecure.get(`/users/admin/${user.email}`)
         console.log(res.data.admin)
         return res.data?.admin;
    }
  })
 return [isAdmin,isAdminLoading]


};

export default useAdmin;