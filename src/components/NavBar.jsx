import { useState } from "react";
import "../assets/navbar_styles.css";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const datos = useFetchData(
        "https://web-production-1635.up.railway.app/api/projects"
    );

    return (
        <>
            <div className="w-full py-4 mb-4 border border-gray-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                <nav className="relative flex flex-wrap items-center justify-between ">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                            <a
                                className="text-sm flex items-center justify-center font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white"
                                href="#"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#c026d3"
                                        fill-rule="evenodd"
                                        d="M9 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm1.45-.5a2.5 2.5 0 0 0-4.9 0H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2.55ZM8 5H5.5V3.5h-2v11h9v-11h-2V5H8ZM5 7.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm.75 1.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span className="ms-3">
                                    HeuriCheck
                                </span>
                            </a>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (menuOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-info"
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <Link
                                        to="/home"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
                                <li className="nav-item">
                                    <Link
                                        to="/proyectos"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
                                        <span className="inline-flex items-center justify-center w-2 h-2 p-2 ms-2 text-xs font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                            { datos.length } 
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/proyectos"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
                                        <span className="flex-1 ms-2 whitespace-nowrap">
                                            Settings
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/proyectos"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
                                        <span className="flex-1 ms-2 whitespace-nowrap">
                                            LOGOUT
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
