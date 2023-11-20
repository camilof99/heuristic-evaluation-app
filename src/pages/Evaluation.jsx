import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";
import ModalEvaluation from './../components/ModalEvaluation';

const Evaluation = () => {
    const { id } = useParams();
    const url = `https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/projects/${id}`;
    const datos = useFetchData(url);
    const [isModalOpen, setModalOpen] = useState(false);

    if (datos.length === 0) {
        return <div>Loading...</div>;
    }
    const evaluation = datos[0];

    const handleToggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    return (
        <div>
            <iframe
                src={evaluation.url}
                allowFullScreen
                style={{ width: "100%", height: "100vh", border: "none" }}
            ></iframe>

            {!isModalOpen && (
                <button
                    onClick={handleToggleModal}
                    type="button"
                    className="absolute bottom-4 right-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            )}

            {isModalOpen && (
                <button
                    onClick={handleToggleModal}
                    type="button"
                    className="absolute bottom-4 right-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                            stroke="#ffffff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            )}

            <ModalEvaluation idProject={id} isOpen={isModalOpen} onClose={handleToggleModal} />
        </div>
    );
};

export default Evaluation;
