import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useForm } from "react-hook-form";


import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import JuLogo from '../../assets/Images/Julogo/ju.png'
import useVerifyAdmin from '../../hooks/useVerifyAdmin';

const Signup = () => {

   const axiosPublic = useAxiosPublic();
  const { createUser ,userprofile,Verification,logout} = useContext(AuthContext);



  const [signerror, Setsignerror] = useState('');

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm();
  


  const [verifyEmail  ] = useVerifyAdmin();

  const onSubmit = async (data) => {

     
   const imgHostApi = `https://api.imgbb.com/1/upload?key=aee8509eec7ab84b55ea3379a1fb5ad0`

   const imgFile = {image: data.image[0]}
   const res = await axiosPublic.post(imgHostApi , imgFile , {
       headers: {
           "Content-Type": "multipart/form-data"
       }
   })
    
   
  console.log(res.data.data.display_url);
       
     
      
      if(verifyEmail.find(item => item.email === data.email))
        {
          createUser(data.email,data.password)
    .then(result => {
           const user = result.user;
           console.log(user);
           Verification();  
           userprofile(data.name,res.data.data.display_url)
           .then(()=>{
           
            const userInfo ={
              name:data.name,
              email:data.email,
              
            }
            
            axiosPublic.post('/users', userInfo )

            .then(res =>{
              if(res.data.insertedId)
              {
                Swal.fire({
                  title: "User Create Successfully!",
                  text: "You clicked the button!",
                  icon: "success"
                });
                reset();
                logout();
                navigate('/login');
              }
            })

           
           })
           .catch((error)=>{
             console.log(error);
             Setsignerror(error);
           })
          

           })
        }
        else{
          reset();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You do not have permission to view this website ! ",
            
          });
         
        }
        
      };
      
      
 



  return (
 
<>
   <Helmet>
    <title>SignUp</title>
   </Helmet>

<div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2  ml-24 ">
          
          <img  className='w-[600px]  ' src={JuLogo} alt="" />
          <h1 className='font-bold text-3xl text-center text-cyan-700 ' >শেখ রাসেল হল</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className=" text-center text-4xl font-bold text-sky-700 ">Signup Now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Name</span>
              </label>
              <input type="text" name='name' {...register("name", { required: true })} placeholder="Name:" className="input input-bordered"  />
              {errors.name && <span className='text-red-500' >Name Field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Email</span>
              </label>
              <input type="email" name='email'{...register("email", { required: true })} placeholder="Email:" className="input input-bordered"  />
              {errors.email && <span className='text-red-500' >Email Field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">UploadPhoto</span>
              </label>
              <input type="file" {...register("image", { required: true })} placeholder="Select Image: " className="file-input file-input-bordered w-full max-w-xs"  />
              {errors.image && <span className='text-red-500' >Email Field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Password</span>
              </label>
              <input type="password" name='password' {...register("password", { required: true, minLength:6 , maxLength: 20, pattern :/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered"  />
            
              {errors.password?.type === "required" && (  <p className='text-red-500' >Password is required</p> )}
              {errors.password?.type === "minLength" && (  <p className='text-red-500' >Password must be 6 character required</p> )}
              {errors.password?.type === "maxLength" && (  <p className='text-red-500' >Password must be less 20 is required</p> )}
              {errors.password?.type === "pattern" && (  <p className='text-red-500' >Password must be one lowercase letter ,uppercase letter,two minimum 2 digit ,one special character </p> )}
              
            </div>
            <h1 className='label-text' > You  have already an account?  <Link to='/login'  className="underline  ">Login</Link></h1>   
          
            
               <div className="form-control mt-6">

              <input  className="btn btn-primary" type="submit" value="Signup" />
            </div>
          </form>
        </div>

      </div>
    </div>

</>
    
    
    
  );
};

export default Signup;