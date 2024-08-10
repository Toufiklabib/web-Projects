import React from 'react';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';




const AddItems = () => {

    const navigate = useNavigate();

    const axiosPublicLink =useAxiosPublic();
    const axiosPrivateLink = useAxios();
     const imgHostApi = `https://api.imgbb.com/1/upload?key=aee8509eec7ab84b55ea3379a1fb5ad0`
    const { register, handleSubmit ,reset } = useForm();
    const onSubmit = async (data) => {
        const imgFile = {image: data.image[0]}
    const res = await axiosPublicLink.post(imgHostApi , imgFile , {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    if(res.data.success)
        {
            const menuItem = {
                name:data.name,
                category:data.category,
                price: parseFloat(data.price),
                recipe:data.recipe,
                image: res.data.data.display_url
            }

         const menuRes = await axiosPrivateLink.post('/menu',menuItem);
         console.log(menuRes.data);
         if(menuRes.data.insertedId)
            {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Menu Add Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

        navigate('/dashboard/manageitem')
        // console.log( 'with image url', res.data);
    }


    return (
        <div className='w-[900px] ml-5' >
            <CartTitle title={'Add Item'} ></CartTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full  ">
                    <div className="label">
                        <span className="label-text">Recipe Name</span>
                    </div>
                    <input  {...register("name" , {required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                </label>

                <div className='flex gap-2'>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <select defaultValue='default' {...register("category" , {required: true } )}
                            className="select select-bordered w-full max-w-xs">
                            <option  disabled value='default' >Select Option</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                         
                        </select>

                    </label>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input {...register("price" , {required: true })} type="number" placeholder="price" className="input input-bordered w-full " />

                    </label>

                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details</span>
                    </div>
                    <textarea {...register('recipe' , {required: true } )}   className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                </label>

              <div className='my-5'>
              <input {...register('image' , {required: true } )} type="file" className="file-input file-input-bordered w-full max-w-xs" />
              </div>

               <div>
               <button type="submit"  className='btn btn-primary' > Add Item </button>  
               </div>
                  
                
            </form>


        </div>
    );
};

export default AddItems;