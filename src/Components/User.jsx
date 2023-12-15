import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
    const loadedUsers=useLoaderData();
    const [users,setUsers]=useState(loadedUsers);
    const handleDelete=_id=>{
        console.log(_id);
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
              fetch(` https://old-coffee-shop-server.vercel.app/user/${_id}`,{                
                method: 'DELETE'
              })
              .then(result=>result.json())
              .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                    }); 
                    const remainingUser=users.filter(user=>user._id!==_id);
                    setUsers(remainingUser);
                }
              })
            }
          });
    }
    
    return (
        <div>
            <h1 className="text-5xl font-raleway text-center my-10 text-green-600">Total Users: {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Creation Time</th>
                        <th>Last Login Time</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        users.map(user=> <tr key={user._id}>                            
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>                            
                            <td>{user.lastLoggedAt}</td>                            
                            <td> <button onClick={()=>handleDelete(user._id)} className="btn btn-secondary btn-outline">X</button> </td>
                        </tr>)
                    }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default User;