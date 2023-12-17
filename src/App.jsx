import { useLoaderData } from "react-router-dom"
import Coffeecard from "./Components/Coffeecard";
import { useState } from "react";



function App() {

  const loadedCoffees=useLoaderData();
  const [coffees, setCoffees]=useState(loadedCoffees);

 

  return (
    <>
         
      <h1 className="text-5xl text-[#331A15] font-rancho text-center my-12">Our Popular Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
          coffees.map(coffee=> <Coffeecard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffeecard>)
        }
      </div>
    </>
  )
}

export default App
