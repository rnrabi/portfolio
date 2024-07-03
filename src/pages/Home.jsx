import profile from "../assets/profile1.png"
import { FaDownload } from "react-icons/fa6";
import TechnicalSkill from "./homeComponent/TechnicalSkill";
import Projects from "./homeComponent/Projects";
import Contact from "./homeComponent/Contact";
import Education from "./homeComponent/Education";
import AboutMe from "./homeComponent/AboutMe";

const Home = () => {

    return (
        <div>
            <div className="flex flex-col-reverse md:flex md:flex-row justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">I am Rabindro Nath Barman</h2>
                    <h3 className="text-2xl font-semibold">I am a web developer</h3>
                    <div className="flex gap-3 mt-5">
                        <button className="btn btn-outline">Portfolio</button>
                        <button className="btn"> <FaDownload /> Resume</button>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img className="w-full" src={profile} alt="" />
                </div>
            </div>

            {/* about me */}
            <AboutMe></AboutMe>

            {/* skill section */}
            <TechnicalSkill></TechnicalSkill>

            {/* project section */}
            <Projects></Projects>

           <hr />
           {/* experience and education */}
           <Education></Education>
          
           {/* contact section */}
            <Contact></Contact>



        </div>
    );
};

export default Home;