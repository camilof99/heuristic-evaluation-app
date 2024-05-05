import { useState } from "react";
import { useFetchData } from "../hooks/UseFetchData";
import EvaluationHeuristic from "./EvaluationHeuristic";

const ModalEvaluation = ({ idProject, isOpen, onClose }) => {
    const url = "https://web-production-1635.up.railway.app/api/heuristics";
    const datos = useFetchData(url);

    const [HeuristicName, setHeuristicName] = useState("");

    const handleOverlayClick = (event) => {
        if (event.target.id === "modalOverlay") {
            onClose();
        }
    };

    return (
        <div
            id="modalOverlay"
            onClick={handleOverlayClick}
            className={`fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center ${
                isOpen ? "visible" : "hidden"
            }`}
        >
            <div className="absolute bottom-4 right-24 bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-2xl max-h-full">
                <div className="flex items-start justify-between p-3 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Heuristic Evaluation - {HeuristicName}
                    </h3>
                    <button
                        onClick={onClose}
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="defaultModal"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <EvaluationHeuristic
                        idProject={idProject}
                        datos={datos}
                        setHeuristicName={setHeuristicName}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalEvaluation;
