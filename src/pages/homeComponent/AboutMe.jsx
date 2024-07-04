import { FaDownload, FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import myPic from "../../assets/profile2.png"

const AboutMe = () => {
    return (

        <div className="py-10 card bg-gray-200 shadow-xl">
            <h2 id="about" className="text-3xl font-bold text-center">About me</h2>
            <p className="text-xl text-center mb-8 italic">Welcome To My Site</p>

            <div className="dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-12 mx-auto">

                    <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
                        <img className="rounded-full" src={myPic} alt="" />
                    </div>


                    <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-slate-400">

                        <div className="pt-6 pb-4 space-y-2">
                            <h1 className="text-3xl font-bold">I am a web developer</h1>
                            <p>name:Rabindro Nath barman</p>
                            <p>Birthdate: 19/05/1989</p>
                            <p>Language: Bangla , English</p>
                            <p>Nationality: Bangladeshi</p>
                        </div>

                        <div className="pt-6 pb-4 space-y-2">
                            <p>Phone:01774720271</p>
                            <p>Email:rnrabi913@gmail.com</p>
                            <p>Address: Zilla:Kurigram , Div:Rangpur , Dhaka, Bangladesh</p>
                            <p className="flex gap-3">
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
                            </p>
                        </div>

                        <div className="pt-6 pb-4 space-y-2">
                            <button className="btn"> <FaDownload /> Resume</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>



        // <div className="bg-slate-500">
        //     <h2 className="text-3xl font-bold text-center">About me</h2>
        //     <p className="text-xl text-center">Welcome To My Site</p>
        //     <div className="flex justify-between items-center">
        //         <div className="w-1/3">
        //             <img src={myPic} alt="" />
        //         </div>
        //         <div>
        //             details
        //         </div>
        //     </div>
        // </div>
    );
};

export default AboutMe;