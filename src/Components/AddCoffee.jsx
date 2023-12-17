import Swal from "sweetalert2";
const AddCoffee = () => {
    const handleAddCoffee = e =>{
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
        const newCoffee={name,quantity,supplier,taste,category,details,photo,price};
        console.log(newCoffee);

        // send to server
        fetch(' https://old-coffee-shop-server.vercel.app/coffee',{
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(newCoffee),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "coffee added successfully",
                
              });
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-8 border-r-4 ">
            <h1 className="text-5xl font-rancho text-[#374151] text-center ">Add New Coffee</h1>
            <p className="lg:text-center text-justify text-sm lg:mx-36 font-raleway my-6 lg:my-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee} className="">
               <div className="flex gap-3 lg:gap-8 justify-center">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full"  />
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Enter quantity" className="input input-bordered w-full"  />       
                   </div>
                </div>
               <div className="flex gap-3 lg:gap-8 justify-center">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full"  />
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full"  />  
                   </div>
                </div>
               <div className="flex gap-3 lg:gap-8 justify-center">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Enter Coffee category" className="input input-bordered w-full"  />
                    </div>

                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full"  />               
                    </div>
                </div>
                <div className="flex gap-3 lg:gap-8 justify-center">
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="price" className="input input-bordered w-full"  />               
                    </div>
                    <div className="w-full ">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter Enter photo url" className="input input-bordered w-full "  />               
                    </div>
                </div>                
                
                <div className="flex justify-center">
                    <div className="w-full mt-5 lg:mt-10 ">
                            
                            <input type="submit" value='Add Coffee'   className=" btn input input-bordered w-full bg-[#D2B48C] "  />               
                    </div>
                </div>      
            </form>
                                     
                    
                
            
               
                
        </div>
    );
};

export default AddCoffee;