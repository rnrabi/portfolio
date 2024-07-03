import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
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
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Rabindro Nath Barman</p>
                </aside>

            </footer>
        </div>
    );
};

export default Footer;