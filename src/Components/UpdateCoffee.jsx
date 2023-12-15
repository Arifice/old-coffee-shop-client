import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData();

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const price=form.price.value;
        const updatedCoffee={name,quantity,supplier,taste,category,details,photo,price};
        console.log(updatedCoffee);

        // send to server
        fetch(` https://old-coffee-shop-server.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(updatedCoffee),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: "coffee updated successfully",
                    confirmButtonText:'Cool'
                    
                  });
            }
        })
    }
    // eslint-disable-next-line no-unused-vars
    const {_id,name,quantity,supplier,taste,category,details,price,photo}=coffee;
    return (
        <div className="bg-[#F4F3F0] p-8 border-r-4 m-10">
            <h1 className="text-5xl font-rancho text-[#374151] text-center ">Update Existing Coffee Details</h1>
            <p className="text-center mx-36 font-raleway my-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleUpdateCoffee} className="card-body">
               <div className="flex gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" className="input input-bordered w-[436px] h-[48px]"  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Enter Chef Name" className="input input-bordered w-[436px] h-[48px]"  />       
                   </div>
                </div>
               <div className="flex gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-[436px] h-[48px]"  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-[436px] h-[48px]"  />  
                   </div>
                </div>
               <div className="flex gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee category" className="input input-bordered w-[436px] h-[48px]"  />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-[436px] h-[48px]"  />               
                    </div>
                </div>

                <div className="flex gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-[436px] h-[48px]"  />               
                    </div>
                    <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter Enter photo url" className="input input-bordered w-[436px] h-[48px] "  />               
                    </div>
                </div>       
                

                <div className="form-control mt-6">
                    <input type="submit" value={'Update Coffee details'} className="btn bg-[#D2B48C] text-[#331A15] font-rancho text-3xl"></input>
                </div>
            </form>
                                     
                    
                
            
               
                
        </div>
    );
};

export default UpdateCoffee;