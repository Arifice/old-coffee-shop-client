import { NavLink } from "react-router-dom";


const Header = () => {
  const links=<>
        
           <li> <NavLink to={'/'} className='mx-6 text-3xl font-semibold text-white'>Home</NavLink></li>
            <li><NavLink to={'/addcoffee'} className='mx-6 text-3xl font-semibold text-white'>Add Coffee</NavLink>  </li>          
            <li><NavLink to={'/signup'} className='mx-6 text-3xl font-semibold text-white'>sign Up</NavLink></li>
            <li><NavLink to={'/login'} className='mx-6 text-3xl font-semibold text-white'>Login</NavLink></li>
            <li><NavLink to={'/user'} className='mx-6 text-3xl font-semibold text-white'>User</NavLink></li>
          
        </>
    return (
      <div>
        <img className="w-full h-40" src="https://i.postimg.cc/KvqgjynS/header-coffeeequipment.webp" alt="" />
        <div>

        </div>
          <div className="flex justify-between bg-purple-600 py-4">
          <div className="">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-purple-600 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-white text-3xl">Coffee Shop</a>
          </div>

          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links}
            </ul>
          </div>
          
          </div>
      </div>

       
    );
};

export default Header;