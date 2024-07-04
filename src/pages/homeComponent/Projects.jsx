import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import axios from "axios";


const Projects = () => {

    const { data: projects = [] } = useQuery({
        queryKey: ['project'],
        queryFn: async () => {
            const { data } = await axios('http://localhost:5000/projects')
            return data;
        }
    })
    console.log(projects)


    return (
        <div>
            <h2 id="portfolio" className="text-center text-3xl font-bold">I LOVE WHAT I DO.</h2>
            <h3 className="text-center text-lg">my all project</h3>
            <div className="space-y-3 md:space-y-0 my-5 md:grid grid-cols-4 gap-3">
                {
                    projects.map(project => <ProjectCard
                        key={project._id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;