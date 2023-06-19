import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../apis/UseFetchData";
import Modal from "../components/Modal";

const Evaluation = () => {
    const { id } = useParams();
    const url = `http://localhost:3000/api/projects/${id}`;
    const datos = useFetchData(url);
    const [isModalOpen, setModalOpen] = useState(false);


    if (datos.length === 0) {
        return <div>Loading...</div>;
    }
    const evaluation = datos[0];

     const handleOpenModal = () => {
         setModalOpen(true);
     };

     const handleCloseModal = () => {
         setModalOpen(false);
     };

    return (
        <div>
            <iframe
                src={evaluation.url}
                allowFullScreen
                style={{ width: "100%", height: "100vh", border: "none" }}
            ></iframe>

            <button
                onClick={handleOpenModal}
                type="button"
                className="absolute bottom-4 right-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-6 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
                <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
                <span className="sr-only">Icon description</span>
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Evaluation;
