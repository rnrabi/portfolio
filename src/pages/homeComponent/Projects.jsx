import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useState } from "react";


const Projects = () => {
    const [modal, setModal] = useState({})

    const { data: projects = [] } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const { data } = await axios('http://localhost:5000/projects')
            return data;
        }
    })
    // console.log(projects)

    const handleView = async (id) => {
        const { data } = await axios(`http://localhost:5000/project/${id}`)
        setModal(data)
        document.getElementById('my_modal_2').showModal()
    }
    console.log(modal)


    return (
        <div>
            <h2 id="portfolio" className="text-center text-3xl font-bold">I LOVE WHAT I DO.</h2>
            <h3 className="text-center text-lg">my all project</h3>
            <div className="space-y-3 md:space-y-0 my-5 md:grid grid-cols-4 gap-3">
                {
                    projects?.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                        handleView={handleView}
                    ></ProjectCard>)
                }
            </div>

            {/* modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{modal.projectName}</h3>
                    <p className="py-4">{modal.description}</p>
                    <h2>Technology:</h2>
                    <p className="py-4">{modal.technology?.map((tec , idx)=><li key={idx}>{tec}</li>)}</p>

                    <h2>Featured:</h2>
                    <p className="py-4">{modal.featured?.map((fec , idx)=><li key={idx}>{fec}</li>)}</p>
                    <h2>Live site: <a href={modal.liveLink}>{modal.liveLink}</a></h2>
                    <h2>github client link: {modal.githubClient}</h2>
                    <h2>github server link: {modal.githubServer}</h2>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Projects;