import React from 'react';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import useMenu from '../../hooks/useMenu';
import { MdDeleteForever } from 'react-icons/md';
import { GrUpdate } from "react-icons/gr";
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import { Link } from 'react-router-dom';
const ManageItem = () => {

    const [menu , , refetch] = useMenu();

    const privateLink = useAxios();


  

    const handleDeleteItem = (item) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await privateLink.delete(`/menu/${item._id}`);
                 console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div className='w-[900px] ml-5' >
            <CartTitle title={'Manage All Item'} ></CartTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th> Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            menu.map((item, index) => <tr key={item._id} >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1>{item.name}</h1>
                                </td>
                                <td>
                                    <h1>{item.price}</h1>
                                </td>
                                <th>
                                   <Link to={`/dashboard/updateitem/${item._id}`} > <button  className="btn btn-info btn-md "> <GrUpdate color='white' size={20}></GrUpdate>  </button></Link>
                                </th>
                                <th>
                                    <button  onClick={() => handleDeleteItem(item)} className="btn btn-error btn-md "> <MdDeleteForever color='white' size={20}></MdDeleteForever> </button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default ManageItem;