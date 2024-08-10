import React from 'react';
import { useForm } from 'react-hook-form';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import useAuth from '../../hooks/useAuth';

import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const AddReview = () => {


    const { user } = useAuth();
    
    const axiousLink = useAxios();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const review = {
            name: data.name,
            details: data.comment,
            rating: parseInt(data.rating)


        }

       const result = await axiousLink.post('/reviews', review)
           
        if(result.data.insertedId)
            {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Review Submit ",
                    showConfirmButton: false,
                    timer: 1500
                  });

               reset();

            }
        
  
          
    
           
 

    }




    return (
        <div className='w-[900px] ml-5' >
            <CartTitle title={'Add Your Review'} ></CartTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full  ">
                    <div className="label">
                        <span className="label-text font-bold ">Email:</span>
                    </div>
                    <input defaultValue={user?.email}  {...register("email", { required: true })} type="text" className="input input-bordered w-full " />

                </label>

                <div className='flex gap-2'>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Name:</span>
                        </div>
                        <input defaultValue={user.displayName} {...register("name", { required: true })} type="text" placeholder="price" className="input input-bordered w-full  uppercase " />

                    </label>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text font-bold ">Rating:</span>
                        </div>
                        <input {...register("rating", { required: true })} type="number" placeholder="Rating up to 5 " className="input input-bordered w-full " />

                    </label>

                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold "> Your Comment:</span>
                    </div>
                    <textarea {...register('comment', { required: true })} type='text' className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </label>

                <div>
                    <button type="submit" className='btn btn-success mt-5  text-white' > submit </button>
                </div>


            </form>


        </div>
    );
};

export default AddReview;