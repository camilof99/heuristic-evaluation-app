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
            "https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/createProject";
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
        "https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/coordinators"
    );
    const evaluators = useFetchData(
        "https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/evaluators"
    );

    return (
        <div
            id="modalOverlay"
            onClick={handleOverlayClick}
            className={`fixed inset-0 m-20 z-50 flex items-center justify-center`}
        >
            <div className="relative w-full max-w-4xl max-h-full">
                <div className="relative bg-white rounded-lg dark:bg-gray-700 border border-purple-500 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-900/80">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <div className="flex items-center">
                            {" "}
                            <svg
                                className="w-4 h-4 me-2 -ms-1 text-white"
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M3 21V3h8v2H5v14h14v-6h2v8H3Zm13-10V8h-3V6h3V3h2v3h3v2h-3v3h-2Z"
                                />
                            </svg>
                            <span className="whitespace-nowrap">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Nuevo proyecto
                                </h3>
                            </span>
                        </div>

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
                            <label
                                for="message"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Description:
                            </label>
                            <textarea
                                name="description"
                                rows="4"
                                value={projectInfo.description}
                                onChange={handleInputChange}
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write your description here..."
                            ></textarea>

                            <div class="mb-6">
                                <label
                                    for="default-input"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    URL:
                                </label>
                                <input
                                    type="text"
                                    name="url"
                                    value={projectInfo.url}
                                    onChange={handleInputChange}
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <br />

                            <div className="flex items-center justify-center text-center space-x-4">
                                <div className="flex flex-col">
                                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Coordinator:
                                    </label>
                                    <select
                                        name="id_coordinator"
                                        value={projectInfo.id_coordinator}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            Select Coordinator
                                        </option>
                                        {coordinators.map((coordinator) => (
                                            <option
                                                key={coordinator.id}
                                                value={coordinator.id}
                                            >
                                                {coordinator.name}{" "}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex flex-col">
                                    <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Evaluator:
                                    </label>
                                    <select
                                        name="id_evaluator"
                                        value={projectInfo.id_evaluator}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">
                                            Select Evaluator
                                        </option>
                                        {evaluators.map((evaluator) => (
                                            <option
                                                key={evaluator.id}
                                                value={evaluator.id}
                                            >
                                                {evaluator.name}{" "}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-900 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 48 48"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="4"
                                >
                                    <path d="M19.01 42H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v10.03m0 10.005V41a1 1 0 0 1-1 1H29.037M42 29.035H18" />
                                    <path d="m23 23l-6 6l6 6" />
                                </g>
                            </svg>
                            <span className="flex-1 ms-2 whitespace-nowrap">
                                Decline
                            </span>
                        </button>

                        <button
                            onClick={handleSubmit}
                            data-modal-hide="defaultModal"
                            type="button"
                            className="text-white bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
                        >
                            <svg
                                className="w-4 h-4 me-2 -ms-1"
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M3 21V3h8v2H5v14h14v-6h2v8H3Zm13-10V8h-3V6h3V3h2v3h3v2h-3v3h-2Z"
                                />
                            </svg>
                            <span className="flex-1 whitespace-nowrap">
                                Create
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalNewProject;
