import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import Userprofile from '../UserProfile/Userprofile';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const ModeratorHome = () => {

    const { user } = useAuth();
  const axiosLink = useAxios();
  const { data: modaratorData } = useQuery({
    queryKey: ['modarator-stats'],
    queryFn: async () => {
      const res = await axiosLink.get('/modarator-stats')

      return res.data;
    }
    
  })


 
  const axiosPublc = useAxiosPublic();

   
  const { data: authUserData   }  = useQuery({
      queryKey: ['/VerfyUserAdmin/:email' ,  user?.email ],
      queryFn : async () =>{
        const res =  await axiosPublc.get(`/VerfyUserAdmin/${user?.email}`)

        return res.data;
      }
  })

    return (

      
        <div className='w-[900px] ml-5  ' >
     



      <CartTitle title={'MOderator  Home '}></CartTitle>
      
    
      

          <div className='mx-auto  w-30 p-5 border' >
           <Userprofile  logo={user.photoURL} ></Userprofile>
       <h1 className='mt-2 uppercase font-bold text-center text-1xl ' >MODERATOR NAME : {user?.displayName}</h1>
       <h1 className='mt-2  font-bold text-center text-1xl ' >MODERATOR : {user?.email}</h1>
     
          </div>
          
          <div className="overflow-x-auto mt-5">
  <table className="table">
 
   
    <tbody className='  '>
   
      <tr className="bg-base-200  ">
        <td className=' font-bold uppercase mt-2 '> Name: {authUserData?.name}</td>
        <td  className=' font-bold uppercase ' >Session : {authUserData?.session}</td>
      </tr>
      <br />
    
      <tr className="bg-base-200">
        <td className=' font-bold uppercase mt-2 '> Registration: {authUserData?.registration}</td>
        <td  className=' font-bold uppercase ' >department : {authUserData?.department}</td>
      </tr>
      <br />
      
      <tr className="bg-base-200 mt-2">
        <td className=' font-bold uppercase '> Hall Name : {authUserData?.hall}</td>
        <td  className=' font-bold  ' >EMAIL : {authUserData?.email}</td>
      </tr>
     
    
    </tbody>
  </table>
</div>

<div className='w-full mt-5  '>
        <div className="stats shadow p-5 ">

          <div className="stat place-items-center w-[225px]   ">
            <div className="font-bold">Total User</div>
            <div className="stat-value">{modaratorData?.user}</div>

          </div>

          <div className="stat place-items-center w-[225px]  ">
            <div className="font-bold">Total Menu</div>
            <div className="stat-value text-secondary">{modaratorData?.menuItem}</div>

          </div>

          <div className="stat place-items-center w-[225px]  ">
            <div className="font-bold">Total Orders</div>
            <div className="stat-value">{modaratorData?.orders}</div>

          </div>
          <div className="stat place-items-center w-[225px]  ">
            <div className="font-bold">Total Revenue</div>
            <div className="stat-value">{modaratorData?.revenue}</div>

          </div>

        </div>
      </div>
    

    </div>
    );
};

export default ModeratorHome;