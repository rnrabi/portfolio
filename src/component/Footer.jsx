import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a href="#home" className='hover:text-blue-500 hover:underline font-bold'>Home</a>

                    <a href="#about" className='hover:text-blue-500 hover:underline font-bold'>About Me</a>

                    <a href="#portfolio" className='hover:text-blue-500 hover:underline font-bold'>Portfolio</a>

                    <a href="#experience" className='hover:text-blue-500 hover:underline font-bold' >Experience</a>

                    <a href='#contact' className='hover:text-blue-500 hover:underline font-bold'>Contact Me</a>
                </nav>

                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/rabindro.rabi.7">
                            <FaFacebookF></FaFacebookF>
                        </a>

                        <a href="https://x.com/home">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="https://www.linkedin.com/in/rnrabi">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="https://github.com/rnrabi">
                            <FaGithub></FaGithub>
                        </a>
                    </div>
                </nav>

                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by <span className="text-blue-500 font-medium italic">Rabindro Nath Barman</span></p>
                </aside>

            </footer>
        </div>
    );
};

export default Footer;