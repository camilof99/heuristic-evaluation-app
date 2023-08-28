
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";
import ProjectTable from "../components/ProjectTable";

function Projects() {

    const navigate = useNavigate();

    const handleButtonClick = (id) => {
        navigate(`/evaluation/${id}`);
    };

    const datos = useFetchData(
        "https://heuristic-evaluation-api-fxov-dev.fl0.io/api/projects"
    );

    const handleResultButtonClick = (idProject) => {
        navigate(`/evaluationresults/${idProject}`);
    };

    return (
        <>
            <div className="flex flex-col p-4 h-screen border border-red-400">
                <Navbar />
                <div className="w-full flex-1 p-6 border border-blue-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                    <ProjectTable
                        datos={datos}
                        handleButtonClick={handleButtonClick}
                        handleResultButtonClick={handleResultButtonClick}
                    />
                </div>
            </div>
        </>
    );
}

export default Projects;
