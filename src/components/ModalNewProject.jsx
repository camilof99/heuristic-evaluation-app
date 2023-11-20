import React, { useState } from "react";
import { usePostData } from "../hooks/usePostData";
import { useFetchData } from "../hooks/UseFetchData";

const ModalNewProject = ({ onClose }) => {
    const [projectInfo, setProjectInfo] = useState({
        description: "",
        url: "",
        id_coordinator: "",
        id_evaluator: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleOverlayClick = (event) => {
        if (event.target.id === "modalOverlay") {
            onClose();
        }
    };

    const handleSubmit = async () => {
        const postDataUrl =
            "https://heuristic-evaluation-api-dev-mxnt.4.us-1.fl0.io/api/createProject";
        try {
            const response = await fetch(postDataUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(projectInfo),
            });
            const data = await response.json();
            console.log("API response:", data);
            onClose();
        } catch (error) {
            console.error("Error sending data to API:", error);
        }
    };

    const coordinators = useFetchData(
        "https://heuristic-evaluation-api-dev-mxnt.4.us-1.fl0.io/api/coordinators"
    );
    const evaluators = useFetchData(
        "https://heuristic-evaluation-api-dev-mxnt.4.us-1.fl0.io/api/evaluators"
    );

    return (
        <div
            id="modalOverlay"
            onClick={handleOverlayClick}
            className={`fixed inset-0 m-20 z-50 flex items-center justify-center`}
        >
            <div className="relative w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border border-green-400">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Create Project
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
                        <div className="p-6 space-y-2">
                            <label className="block text-sm font-medium text-gray-900 dark:text-white">
                                Description:
                            </label>
                            <textarea
                                name="description"
                                value={projectInfo.description}
                                onChange={handleInputChange}
                                rows="3"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            ></textarea>

                            <label className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
                                URL:
                            </label>
                            <input
                                type="text"
                                name="url"
                                value={projectInfo.url}
                                onChange={handleInputChange}
                                className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />

                            <br />
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-900 dark:text-white">
                                    ID Coordinator:
                                </label>
                                <select
                                    name="id_coordinator"
                                    value={projectInfo.id_coordinator}
                                    onChange={handleInputChange}
                                    className="w-36 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Coordinator</option>
                                    {coordinators.map((coordinator) => (
                                        <option
                                            key={coordinator.id}
                                            value={coordinator.id}
                                        >
                                            {coordinator.name}{" "}
                                            {/* Adjust the property names */}
                                        </option>
                                    ))}
                                </select>

                                <label className="text-sm font-medium text-gray-900 dark:text-white">
                                    Evaluator:
                                </label>
                                <select
                                    name="id_evaluator"
                                    value={projectInfo.id_evaluator}
                                    onChange={handleInputChange}
                                    className="w-36 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Select Evaluator</option>
                                    {evaluators.map((evaluator) => (
                                        <option
                                            key={evaluator.id}
                                            value={evaluator.id}
                                        >
                                            {evaluator.name}{" "}
                                            {/* Adjust the property names */}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            onClick={handleSubmit}
                            data-modal-hide="defaultModal"
                            type="button"
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            Create
                        </button>
                        <button
                            data-modal-hide="defaultModal"
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalNewProject;
