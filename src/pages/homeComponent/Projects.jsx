import ProjectCard from "./ProjectCard";


const Projects = () => {
    return (
        <div>
            <h2 id="portfolio" className="text-center text-3xl font-bold">I LOVE WHAT I DO.</h2>
            <h3 className="text-center text-lg">my all project</h3>
            <div className="space-y-3 md:space-y-0 my-5 md:grid grid-cols-4 gap-3">
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </div>
        </div>
    );
};

export default Projects;