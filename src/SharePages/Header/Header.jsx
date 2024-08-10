import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { FaPhone, FaShoppingCart } from "react-icons/fa";
import useCartdata from '../../hooks/useCartdata';
import useAdmin from '../../hooks/useAdmin';
import useModerator from '../../hooks/useModerator';
import { GiKnifeFork } from "react-icons/gi";
import logo from '../../assets/Images/Julogo/logo-ju.png'
const Header = () => {
 

 const [cart] = useCartdata();

  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();
  const handelLogout = () => {
    logout()
      .then(() => {
      
      })
  }
  const navLink1 = <>
   
    {

      user && isAdmin && <>
      <li><Link className='text-[12px] font-bold  gap-1  hover:text-white ' to='/dashboard/adminHome' ><BiSolidCategory size={15} /> ADMIN DASHBOARD </Link></li>
      </>
    }

    {
      user && isModerator && <>
         <li><Link className='text-[12px] font-bold  gap-1  hover:text-white ' to='/dashboard/moderatorHome' ><BiSolidCategory size={15} /> MODERATOR DASHBOARD </Link></li>
      </>
    }

    {
      user && !isAdmin && !isModerator && <>
      <li><Link className='text-[12px] font-bold gap-1  hover:text-white  ' to='/' ><TiHome size={15} />HOME</Link></li>
      <li><Link className='text-[12px] font-bold  gap-1    hover:text-white ' to='/menu' > <MdOutlineRestaurantMenu size={15} />MENU</Link></li>
      <li><Link className='text-[12px] font-bold  gap-1  hover:text-white ' to='/order/breakfast' ><GiKnifeFork size={15} />ORDER </Link></li>

      <li><Link className='text-[12px] font-bold  gap-1  hover:text-white ' to='/dashboard/userHome' ><BiSolidCategory size={15} />DASHBOARD </Link></li>
      
      <li><Link to='/dashboard/cart' ><FaShoppingCart size={18} /> <div className="badge font-bold badge-warning gap-0">+{ cart.length}</div></Link></li>
      </>
    }
    
  </>





  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-40 bg-black text-white max-w-screen-xl  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink1}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">  <img className='w-56 h-14 p-1' src={logo} alt="" /> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink1}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <>

<div className="flex ">
    <div >
    <input type="text" value={user.displayName} className="input w-60 p-1 h-10 mt-1 bg-transparent font-bold outline-none uppercase  text-right rounded-lg text-zinc-50 " />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src={user.photoURL} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box bg-lime-500 w-20">
      
        <li className='text-white font-bold text-center   ' onClick={handelLogout} > LogOut</li>
      </ul>
    </div>
  </div>

          
            </> :
              <>
                <button className='btn btn-outline  text-[12px] font-bold  mr-2  btn-warning'> <Link to='/signup' >Signup</Link></button>
                <button className='btn btn-outline  text-[12px] font-bold mr-1 btn-success' > <Link to='/login' >Login</Link></button>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;