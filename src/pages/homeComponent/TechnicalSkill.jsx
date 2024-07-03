import tailwind from "../../assets/tailwind.png"
import html from "../../assets/html.png"
import bootstrap from "../../assets/bootstrap.png"
import react from "../../assets/react.png"
import node from "../../assets/node.png"
import css from "../../assets/css.png"
import javaScript from "../../assets/javaScript.png"
import express from "../../assets/express.png"
import mongodb from "../../assets/mongodb.png"

const TechnicalSkill = () => {
    return (
        <div className="my-10">
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                    <h2 className="text-3xl font-bold">My Technical Skill</h2>
                    <div className="flex flex-wrap justify-center lg:justify-between">
                        
                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={html} alt="" />
                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={css} alt="" />
                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={tailwind} alt="" />
                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={bootstrap} alt="" />

                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={javaScript} alt="" />

                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={react} alt="" />

                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={node} alt="" />

                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={express} alt="" />

                        <img className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-600" src={mongodb} alt="" />
                                               
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TechnicalSkill;