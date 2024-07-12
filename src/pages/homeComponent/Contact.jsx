import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_o6kt0it', 'template_ulda23m', form.current,
                'uXl16mb1q4qr5jvMw',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        console.log('submit meassage is ok')
    }


    return (
        <div id="contact" className="my-10">
            <h2 className="text-center">Have Question?</h2>
            <h1 className="text-center text-3xl font-bold">Contact me Now</h1>
            <div>
                <section className="py-6 dark:bg-gray-100 dark:text-gray-900">

                    <form ref={form} onSubmit={sendEmail} className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-4">

                        <div className="py-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="mb-1">Your name</span>
                                <input type="text" name="to_name" placeholder="your name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>
                            <label className="block">
                                <span className="mb-1">Your email</span>
                                <input type="email" name="from_email" placeholder="Your email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>

                            <label className="block">
                                <span className="mb-1">Your phone</span>
                                <input type="text" name="phone" placeholder="Your phone" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8" />
                            </label>
                            <div>
                                <ul className="flex justify-evenly">

                                    <li className="border border-gray-500 rounded-full p-3"><a href="https://www.facebook.com/rabindro.rabi.7"><FaFacebookF></FaFacebookF></a></li>

                                    <li className="border border-gray-500 rounded-full p-3"><a href="https://x.com/home"><FaTwitter></FaTwitter></a></li>

                                    <li className="border border-gray-500 rounded-full p-3"><a href="https://www.linkedin.com/in/rnrabi"><FaLinkedinIn></FaLinkedinIn></a></li>

                                    <li className="border border-gray-500 rounded-full p-3"><a href="https://github.com/rnrabi"><FaGithub></FaGithub></a></li>
                                </ul>
                                <div className="mx-auto">
                                    <a href="https://mail.google.com" className="flex gap-2 justify-center items-center mt-4"><MdOutgoingMail></MdOutgoingMail> rnrabi913@gmail.com</a>
                                </div>
                            </div>

                        </div>

                        <div noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">

                            <label className="block">
                                <span className="mb-1">Message</span>
                                <textarea rows="10" name="message" placeholder="Your message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 border p-3 mb-8"></textarea>
                            </label>
                            <button className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 font-semibold">Send message</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;