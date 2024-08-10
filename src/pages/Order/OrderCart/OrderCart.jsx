import { Rating } from '@smastrom/react-rating';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {  toast } from 'react-toastify';
import useAxios from '../../../hooks/useAxios';
import useCartdata from '../../../hooks/useCartdata';



const OrderCart = ({item}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosLink = useAxios();
 const [cart,refetch] =useCartdata();


  const {user} =useAuth();
     
    const { _id , name,image,recipe,price,rating}  = item;
  
  
    const handelAddtoCart = (food) =>{
         
          if(user && user.email)
          {
             const cartItem ={
                menuId : _id,
                email: user.email,
                name ,
                image,
                price
             }

             axiosLink.post('carts',cartItem)
             .then((res)=>{
                console.log(res.data);
                if(res.data.acknowledged === true)
                {
                  toast.success(` 🛒 ${name}  Add To Cart!`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                  refetch();
                }

             })
          }
          else{
            Swal.fire({
              title: "You are not login",
              text: "Please login and add to cart",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, Sure!"
            }).then((result) => {
              if (result.isConfirmed) {
                 navigate('/login', {state:{from:location}} )
              }
            });
          }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
      
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-slate-900 text-white absolute right-3 top-7 px-3 py-2 rounded-md   '>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end flex items-center justify-between">
          <Rating
           style={{ maxWidth: 100 }}
           value={rating}
           readOnly
           />
            <button onClick={()=>handelAddtoCart(item)}  className="btn btn-primary"> Add to Cart</button>
          </div>
        </div>
       
      </div>
      
    );
};

export default OrderCart;