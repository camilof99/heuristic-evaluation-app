
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate("/proyectos");
    };
    
    return (
        <>
            <div className="flex flex-col p-4 h-screen border border-red-400">
                <Navbar />
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-white text-center font-extrabold text-9xl">
                        <span className="mr-6">H</span>
                        <span className="mr-6">E</span>
                        <span className="mr-6">U</span>
                        <span className="mr-6">R</span>
                        <span className="mr-6">I</span>
                        <span className="mr-6">C</span>
                        <span className="mr-6">H</span>
                        <span className="mr-6">E</span>
                        <span className="mr-6">C</span>
                        <span>K</span>
                    </p>
                    <p className="text-white text-center font-extralight italic text-xl mb-10">
                        "Evaluaciones heurísticas sin complicaciones, resultados
                        excepcionales".
                    </p>
                    <button
                        onClick={handleButtonClick}
                        type="button"
                        className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                    >
                        Iniciar
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
        
}

export default Home;
