import { useState } from "react";
import "../assets/navbar_styles.css";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col p-4 h-screen border border-red-400">
                <div className="w-full py-4 mb-4 border border-gray-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                    <nav className="relative flex flex-wrap items-center justify-between ">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                                <a
                                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                    href="#"
                                >
                                    Heuristic Evaluation
                                </a>
                                <button
                                    className="text-white cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
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
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="#"
                                        >
                                            Inicio
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="#"
                                        >
                                            Proyectos
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                            href="#"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="w-full flex-1 p-6 border border-blue-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="flex items-center justify-between pb-4">
                            <div>
                                <button
                                    id="dropdownRadioButton"
                                    data-dropdown-toggle="dropdownRadio"
                                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                    type="button"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-file-plus"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                        <path d="M12 11l0 6"></path>
                                        <path d="M9 14l6 0"></path>
                                    </svg>
                                    &nbsp;Nuevo proyecto
                                </button>
                            </div>
                            <label className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search"
                                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Search for items"
                                />
                            </div>
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr className="text-center">
                                    <th scope="col" className="px-6 py-3">
                                        Fecha
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Evaluator
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        State
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Assess
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        15-04-2023
                                    </th>
                                    <td className="px-6 py-4">
                                        Heuristic evaluation
                                    </td>
                                    <td className="px-6 py-4">Camilo Faria</td>
                                    <td className="px-6 py-4">Assigned</td>
                                    <td className="px-6 py-4">
                                        <div>
                                            <a
                                                href="#"
                                                className="mr-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Assess
                                            </a>
                                            |
                                            <a
                                                href="#"
                                                className="ml-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                View
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
