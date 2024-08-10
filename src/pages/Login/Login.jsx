import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Julogo from '../../assets/Images/Julogo/ju.png'
const Login = () => {


  const {signIn} =useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    
    const address = location.state?.from?.pathname || "/";
     
     
  
   const handelLogin = (event) =>{
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password);
    signIn(email,password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Successfully Login....",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(address, { replace: true });
      
    })
   }





    return (
        <>

        <Helmet>
          <title>LOGIN</title>
        </Helmet>

       

        <div className="hero min-h-screen  bg-white ">
      
        <div className="hero-content flex-col lg:flex-row-reverse gap-10  ">
        
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
         
            <form onSubmit={handelLogin} className="card-body">
           
              <h1 className="text-4xl font-bold text-center text-sky-700  ">Login Now!</h1>
        
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                <label className="label">
                  <Link  className="label-text-alt link link-hover">Forgot password?</Link>
              
                </label>
                <h1 className='label-text' > Don't have an account?  <Link to='/signup'  className="underline ">Sign Up</Link></h1>
              </div>
           
              <div className="form-control mt-6">
               
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left w-1/2  mr-28 ">
         
            <img  className='w-[500px]  ' src={Julogo} alt="" />
            <h1 className='font-bold text-3xl text-center text-cyan-700 ' >শেখ রাসেল হল</h1>
          </div>
        </div>
      </div>
        
        
        </>
    );
};

export default Login;