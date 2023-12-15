import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Signup = () => {

    const {createUser}=useContext(AuthContext);

    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const user={name,email,password};
        console.log(user);
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            // new user has been created.

            const createdAt=result?.user?.metadata?.creationTime;
            const user={name,email,createdAt:createdAt};
            fetch(' https://old-coffee-shop-server.vercel.app/user' ,{
                method:'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(user),
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "user added successfully",
                        
                      });
                }
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero  bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>                    
                </div>
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />                        
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;