

const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <div>
            <div className="relative overflow-hidden card bg-base-100 image-full  shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes" />
                </figure>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white  card-body">
                    <h2 className="card-title">{project.projectName}</h2>
                    <p>{project.description.slice(0, 50)}.....</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_2').showModal()}>View Details</button>
                    </div>
                </div>
            </div>

            {/* modal */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ProjectCard;