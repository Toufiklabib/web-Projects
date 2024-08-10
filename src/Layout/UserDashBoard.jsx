import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaList,  FaShoppingCart, FaUser, FaUtensilSpoon } from "react-icons/fa";

import { MdOutlinePayment, MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
import useModerator from '../hooks/useModerator'
import useAdmin from '../hooks/useAdmin';
import { BiSolidCategory } from 'react-icons/bi';

const UserDashBoard = () => {

    const [isAdmin] = useAdmin();
    const [isModerator] = useModerator();


    return (
        <div className='flex'>
            <div className="w-64 min-h-screen bg-sky-800  ">
                <h1 className='font-bold text-2xl text-center m-6 text-white'>Sheikh Russel Hall</h1>
                <ul className="menu p-6 text-white ">

                    {
                        isAdmin ?
                            <>

                                
                                <li>
                                    <NavLink to='/dashboard/adminHome' >  <FaHome size={20}></FaHome>  Admin Home  </NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/allusers' >  <FaUser size={20} ></FaUser>   Users Role  </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addusers' >  <FaUser size={20} ></FaUser>   Add Users  </NavLink>
                                </li>
                                <div className="divider divider-primary">OR</div>
                                <li>
                                    <NavLink to='/' >  <FaHome size={20}></FaHome> Home </NavLink>
                                </li>
                            </>
                            : isModerator ?

                                <>
                                    <li className='mt-2'>
                                        <NavLink to='/dashboard/moderatorHome' > <FaHome size={20}></FaHome> Moderator Home</NavLink>
                                    </li>
                                    <li className='mt-2'>
                                        <NavLink to='/dashboard/additems' > <FaUtensilSpoon size={20} ></FaUtensilSpoon> Add Items</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageitem' > <FaList size={20} ></FaList> Manage Item</NavLink>
                                    </li>

                                    <div className="divider divider-primary">OR</div>
                                    <li>
                                        <NavLink to='/' >  <FaHome size={20}></FaHome> Home </NavLink>
                                    </li>
                                  
                                </>

                                :
                                <>
                                    <li className='mt-2'>
                                        <NavLink to='/dashboard/userHome' > <FaHome size={20}></FaHome> User Home</NavLink>
                                    </li>
                                    <li className='mt-2'>
                                        <NavLink to='/dashboard/cart' > <FaShoppingCart size={20} /> My Cart</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/paymenthistory' > <MdOutlinePayment size={20} /> Payment History</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addreview' > <MdOutlinePreview size={20} />  Add Review</NavLink>
                                    </li>

                                    <div className="divider divider-primary "></div>
                                   
                                    <li>
                                        <NavLink to='/' >  <FaHome size={20}></FaHome> HOME </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/menu' > <MdOutlineRestaurantMenu size={20} />   MENU </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/order/breakfast' >  <BiSolidCategory size={20} />  ORDER </NavLink>
                                    </li>
                                </>
                    }

                </ul>
            </div>
            <div className='w-[900px] ml-5' >
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashBoard;