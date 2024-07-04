import axios from "axios";
import { useState } from "react";


const ProjectCard = ({ project , handleView}) => {
    // console.log(project)
   
    return (
        <div>
            <div className="relative overflow-hidden card bg-base-100 image-full  shadow-xl">
                <figure className="h-72">
                    <img className=""
                        src={project.image}
                        alt="Project" />
                </figure>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white  card-body">
                    <h2 className="card-title">{project.projectName}</h2>
                    <p>{project.description?.slice(0, 50)}.....</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => handleView(project._id)} >View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;