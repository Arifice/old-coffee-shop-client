import { NavLink } from "react-router-dom";


const Header = () => {
  const links=<>
          <ul className="text-white font-semibold text-3xl">
            <NavLink to={'/'} className='mx-6'>Home</NavLink>
            <NavLink to={'/addcoffee'} className='mx-6'>Add Coffee</NavLink>            
            <NavLink to={'/signup'} className='mx-6'>sign Up</NavLink>
            <NavLink to={'/login'} className='mx-6'>Login</NavLink>
            <NavLink to={'/user'} className='mx-6'>User</NavLink>
          </ul>
        </>
    return (
        <div className="flex justify-between bg-purple-600 py-4">
          <div className="">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
    );
};

export default Header;