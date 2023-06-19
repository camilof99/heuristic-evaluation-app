
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../apis/UseFetchData";

function Projects() {

    const navigate = useNavigate();

    const handleButtonClick = (id) => {
        navigate(`/evaluation/${id}`);
    };

    const datos = useFetchData("http://localhost:3000/api/projects");

    return (
        <>
            <div className="flex flex-col p-4 h-screen border border-red-400">
                <Navbar />
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
                            <label className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
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
                                        Sitio
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Evaluator
                                    </th>
                                    {/* <th scope="col" className="px-6 py-3">
                                        State
                                    </th> */}
                                    <th scope="col" className="px-6 py-3">
                                        Accciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {datos.map((dato) => (
                                    <tr
                                        key={dato.id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {dato.creation_date}
                                        </th>
                                        <td className="px-6 py-4">
                                            {dato.description}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dato.url}
                                        </td>
                                        <td className="px-6 py-4">
                                            {dato.id_evaluator}
                                        </td>
                                        {/* <td className="px-6 py-4">Assigned</td> */}
                                        <td className="px-6 py-4">
                                            <div>
                                                <button
                                                    type="button"
                                                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                                >
                                                    Ver
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        handleButtonClick(
                                                            dato.id
                                                        )
                                                    }
                                                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                                                >
                                                    Evaluar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
