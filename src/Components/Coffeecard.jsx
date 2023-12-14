/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffeecard = ({coffee,coffees,setCoffees}) => {
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;
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
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'DELETE'
                
              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                      });
                    const remaining=coffees.filter(cofe=>cofe._id!==_id);
                    setCoffees(remaining);
                }
              })
            }
          });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl bg-[#F5F4F1]">
                <figure><img src={photo} alt="Movie"/></figure>                
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <div className="flex justify-between">
                            <div className="space-y-2">
                                <p>Category: {category}</p>
                                <p>Taste: {taste}</p>
                                <p>Quantity: {quantity}</p>
                                <p>supplier: {supplier}</p>
                                <p>Details: {details}</p>   
                            </div>   
                            <div className="join join-vertical space-y-2">
                                <button className="btn btn-secondary btn-outline">View</button>
                               <Link to={`/updatecoffee/${_id}`} > <button className="btn btn-primary btn-outline" >Edit</button></Link>
                                <button onClick={()=>handleDelete(_id)} className="btn btn-accent btn-outline">Delete</button>
                            </div>           
                        </div>
                    </div>  
                    
                
            </div>
    );
};

export default Coffeecard;