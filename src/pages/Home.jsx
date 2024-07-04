import profile from "../assets/profile1.png"
import { FaDownload } from "react-icons/fa6";
import TechnicalSkill from "./homeComponent/TechnicalSkill";
import Projects from "./homeComponent/Projects";
import Contact from "./homeComponent/Contact";
import Education from "./homeComponent/Education";
import AboutMe from "./homeComponent/AboutMe";

import { usePDF, Document, Page, Text } from '@react-pdf/renderer';

const MyDoc = (
    <Document>
        <Page>
            <Text>Name:Rabindro nath barman</Text>
            <Text>I am a web developer</Text>
            <Text>Birthdate: 19/05/1989</Text>
            <Text>Language: Bangla , English</Text>
            <Text>Nationality: Bangladeshi</Text>
        </Page>
    </Document>
);

const Home = () => {
    const [instance, updateInstance] = usePDF({ document: MyDoc });

    if (instance.loading) return <div>Loading ...</div>;

    if (instance.error) return <div>Something went wrong: {error}</div>;


    return (
        <div>
            <div className="flex flex-col-reverse md:flex md:flex-row justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold">I am Rabindro Nath Barman</h2>
                    <h3 className="text-2xl font-semibold">I am a web developer</h3>
                    <div className="flex gap-3 mt-5">
                        <a href="#portfolio"> <button className="btn btn-outline">Portfolio</button></a>
                        <a href={instance.url} download="Rabindro_resume.pdf">
                            <button className="btn"> <FaDownload /> Resume</button>
                        </a>

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