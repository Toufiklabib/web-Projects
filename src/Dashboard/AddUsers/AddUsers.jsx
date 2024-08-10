

import React from 'react';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import { useForm } from 'react-hook-form';

import useAxiosPublic from '../../hooks/useAxiosPublic'
import Swal from 'sweetalert2';
const AddUsers = () => {

    const axiouspublic = useAxiosPublic();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

   const verfyUser = {

     name:data.name,
     session: data.session,
     registration: data.registration,
     department: data.department,
     hall: data.hall,
     email:data.email


   }
     console.log(verfyUser);
     
     const res = await axiouspublic.post('/VerfyUserAdmin', verfyUser )
            
      
        if(res.data.insertedId)
            {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Add Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
  
      

    }

    return (
        <div>
            <CartTitle title={'Verify User'} ></CartTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
            

                <div className='flex gap-2'>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Name</span>
                        </div>
                        <input {...register("name" , {required: true })} type="text" placeholder="Enter Name:" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Enter Your Session:</span>
                        </div>
                        <select defaultValue='default' {...register("session" , {required: true } )}
                            className="select select-bordered w-full ">
                            <option  disabled value='default' >Select Option</option>
                            <option value="17/18">17/18</option>
                            <option value="18/19">18/19</option>
                            <option value="19/20">19/20</option>
                            <option value="20/21">20/21</option>
                            <option value="21/22">21/22</option>
                         
                        </select>

                    </label>

                </div>
                <div className='flex gap-2'>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold  ">Registration:</span>
                        </div>
                        <input {...register("registration" , {required: true })} type="number" placeholder="Enter Registration Number " className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Select Department </span>
                        </div>
                        <select defaultValue='default' {...register("department" , {required: true } )}
                            className="select select-bordered w-full">
                            <option  disabled value='default' >Select Option</option>
                            <option value="CSE">CSE</option>
                            <option value="IIT">IIT</option>
                            <option value="MATH">MATH</option>
                            <option value="ENV">ENV</option>
                            <option value="STAT">STAT</option>
                         
                        </select>

                    </label>

                </div>
                <div className='flex gap-2'>
                   
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Hall</span>
                        </div>
                        <input value={'Sheikh Russel Hall'}  {...register("hall" , {required: true })} type="text" placeholder="" className="input input-bordered w-full " />

                    </label>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold">Email</span>
                        </div>
                        <input {...register("email" , {required: true })} type="email" placeholder="Enter Email " className="input input-bordered w-full " />

                    </label>

                </div>
             
              

               <div>
               <button type="submit"  className='btn btn-primary' > Submit </button>  
               </div>
                  
                
            </form>
        </div>
    );
};

export default AddUsers;