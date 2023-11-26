import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";
import ModalEvaluation from "./../components/ModalEvaluation";
import { Link } from "react-router-dom";

const Evaluation = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Escape") {
                setMenuOpen((prevMenuOpen) => !prevMenuOpen);
            } else if (event.ctrlKey && event.key === "b") {
                setMenuOpen((prevMenuOpen) => !prevMenuOpen);
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

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
            <div
                className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transfom ${
                    isMenuOpen ? "" : "hidden"
                } bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out`}
                tabIndex="-1"
            >
                <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="#"
                >
                    Heuristic Evaluation
                </a>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    {/* Contenido del menú */}
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/proyectos"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
                                    />
                                </svg>
                                <span className="ms-3">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/proyectos"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7.25 6a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0v-7.5A.75.75 0 0 0 7.25 6ZM12 6a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-4.5A.75.75 0 0 0 12 6Zm4 .75a.75.75 0 0 1 1.5 0v9.5a.75.75 0 0 1-1.5 0v-9.5Z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H3.75a.25.25 0 0 0-.25.25Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Proyectos
                                </span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M13 23V13h10v10H13Zm1.5-1.5h7v-.8q-.625-.775-1.525-1.238T18 19q-1.075 0-1.975.463T14.5 20.7v.8ZM18 18q.625 0 1.063-.438T19.5 16.5q0-.625-.438-1.063T18 15q-.625 0-1.063.438T16.5 16.5q0 .625.438 1.063T18 18Zm-6-6Zm.05-3.5q-1.45 0-2.475 1.025T8.55 12q0 1.2.675 2.1T11 15.35V13.1q-.2-.2-.325-.513T10.55 12q0-.625.438-1.063t1.062-.437q.35 0 .625.138t.475.362h2.25q-.325-1.1-1.238-1.8t-2.112-.7ZM9.25 22l-.4-3.2q-.325-.125-.613-.3t-.562-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75L19.925 11H17.4q-.025-.125-.05-.263t-.075-.262l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.213-.962t-1.437-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.6.625 1.35 1.05T11 17.4V22H9.25Z"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Settings
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
                                        <path d="M21 12H8l3-3m0 6l-3-3" />
                                    </g>
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Logout
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <iframe
                src={evaluation.url}
                allowFullScreen
                style={{ width: "100%", height: "100vh", border: "none" }}
            ></iframe>

            <button
                onClick={toggleMenu}
                type="button"
                className="absolute bottom-4 left-4 text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-900 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700"
            >
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="currentColor"
                        d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"
                    />
                </svg>
                <span className="sr-only">Icon description</span>
            </button>

            {!isModalOpen && (
                <button
                    onClick={handleToggleModal}
                    type="button"
                    className="absolute bottom-4 right-4 text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-900 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M21 12H3m0 0l8.5-8.5M3 12l8.5 8.5"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            )}

            {isModalOpen && (
                <button
                    onClick={handleToggleModal}
                    type="button"
                    className="absolute bottom-4 right-4 text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-900 font-medium rounded-full text-sm p-5 text-center inline-flex items-center mr-2 dark:bg-purple-600 dark:hover:bg-purple-700"
                >
                    <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#000000"
                    >
                        <path
                            d="M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            )}

            <ModalEvaluation
                idProject={id}
                isOpen={isModalOpen}
                onClose={handleToggleModal}
            />
        </div>
    );
};

export default Evaluation;
