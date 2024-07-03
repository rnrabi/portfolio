

const ProjectCard = () => {
    return (
        <div>
            <div className="relative overflow-hidden card bg-base-100 image-full  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                </figure>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white  card-body">
                    <h2 className="card-title">Project name</h2>
                    <p>description</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;