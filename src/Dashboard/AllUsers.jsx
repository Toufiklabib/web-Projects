import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../hooks/useAxios';
import { MdDeleteForever } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import CartTitle from '../SharePages/CartTitle/CartTitle';

const AllUsers = () => {
      
    
    const axiosLink = useAxios();

    const {data : users =[] , refetch } = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await axiosLink.get('/users')
            return res.data;

        }

    })
       

    const handeldeleteUser = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
             axiosLink.delete(`/users/${user._id}`)
             .then(res=>{
                if(res.data.deletedCount > 0)
                {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch();
                }
             })
    
            }
          });
      
    

    }

    const handelAddAdmin = (user) =>{
  

        axiosLink.patch(`/users/admin/${user._id}`)
        .then(res=>{
           if(res.data.modifiedCount > 0)
            {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is Admin `,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        })

    }

    const handelAddModerator = (user) =>{
        
      axiosLink.patch(`/users/moderator/${user._id}`)
      .then(res=>{
         if(res.data.modifiedCount > 0)
          {
              refetch();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${user.name} is Moderator `,
                  showConfirmButton: false,
                  timer: 1500
                });
          }

      })



    }



    return (
        <div  > 

              <Helmet>
                <title>All USERS</title>
            </Helmet>

             

             <div className='w-[900px] ml-5' >
             
             <CartTitle title={'ALL USER'} ></CartTitle>
               
              <div className="overflow-x-auto">
             <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>User </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role(Admin)</th>
        <th>Role(Moderator)</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody >
     
      {

         users.map((user,index)=><tr key={user._id} className="bg-base-200 ">
            <th>{index+1}</th>
            <td className='uppercase font-semibold ' >{user.name}</td>
            <td>{user.email}</td>
            <td>
           {
            user.role === 'Admin' ? <><h1 className='font-bold' >Admin</h1></> : <>
             <button onClick={()=> handelAddAdmin(user)}  className="btn btn-success btn-md "> <FaUser color='white' size={20}></FaUser> </button>
            </>
           }
            </td>
            <td>
           {
            user.role === 'Moderator' ? <><h1 className='font-bold' >Moderator</h1></> : <>
             <button onClick={()=> handelAddModerator(user)}  className="btn btn-success btn-md "> <FaUser color='white' size={20}></FaUser> </button>
            </>
           }
            </td>
            <td>
            <button onClick={()=> handeldeleteUser(user)}  className="btn btn-info btn-md "> <MdDeleteForever color='white' size={20}></MdDeleteForever> </button>
            </td>
          </tr>
         )

      }
      
    </tbody>
  </table>
</div>

             </div>
        </div>
    );
};

export default AllUsers;



