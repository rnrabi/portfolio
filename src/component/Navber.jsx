
const Navber = () => {

    const nav = <>
        <li><a href="#home" className='hover:text-blue-500 hover:underline font-bold'>Home</a></li>

        <li><a href="#about" className='hover:text-blue-500 hover:underline font-bold'>About Me</a></li>

        <li><a href="#portfolio" className='hover:text-blue-500 hover:underline font-bold'>Portfolio</a></li>

        <li><a href="#experience" className='hover:text-blue-500 hover:underline font-bold' >Experience</a></li>

        <li><a href='#contact' className='hover:text-blue-500 hover:underline font-bold'>Contact Me</a></li>

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
                    <a id="home" className="btn btn-ghost text-xl">PORTFOLIO</a>
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