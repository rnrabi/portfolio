import { SlCalender } from "react-icons/sl";

const Education = () => {
    return (
        <div className="md:flex justify-between mt-10">
            <div>
                <h2 className="text-left text-3xl font-bold mb-8">Experience</h2>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-400 flex items-center gap-3"><SlCalender></SlCalender>2018 - 2023</h3>
                    <h2 className="text-xl font-semibold">Web designer</h2>
                    <p>I have designed many eye catching web site. </p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-400 flex items-center gap-3"><SlCalender></SlCalender>2023 - now</h3>
                    <h2 className="text-xl font-semibold">Web developer</h2>
                    <p>I have been web developing since 2023....</p>
                </div>
            </div>

            <div>
                <h2 className="text-left text-3xl font-bold mb-8">Education</h2>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-400 flex items-center gap-3"><SlCalender></SlCalender>2015 - 2016</h3>
                    <h2 className="text-xl font-semibold">MSc (mathematics)</h2>
                    <p>College: Kurigram govt. College , kurigram </p>
                </div>
                <div className="mb-5">
                    <h3 className="text-xl text-gray-400 flex items-center gap-3"><SlCalender></SlCalender>2009 - 2013</h3>
                    <h2 className="text-xl font-semibold">BSc (mathematics)</h2>
                    <p>College: Kurigram govt. College , kurigram </p>
                </div>
            </div>
        </div>
    );
};

export default Education;