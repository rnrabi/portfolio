import { NavLink } from "react-router-dom";


const Navber = () => {
   
    const nav = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold' : ''}>Home</NavLink></li>

        <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold' : ''}>About</NavLink></li>

        <li><NavLink to='/portfolio' className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold' : ''}>Portfolio</NavLink></li>

        <li><NavLink to='#' className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold' : ''}>Experience</NavLink></li>

        <li><a href='#contact' className={({ isActive }) => isActive ? 'text-blue-500 underline font-bold' : ''}>Contact Us</a></li>

    </>

    return (
        <div>
            <div className="flex justify-between items-center bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navber;