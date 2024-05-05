import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalNewProject from "./ModalNewProject";

function ProjectTable({ datos, handleButtonClick, handleResultButtonClick }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleToggleModal = () => {
        setModalOpen(!isModalOpen);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = datos.filter((dato) =>
        Object.values(dato).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between pb-4">
                <div>
                    <button
                        onClick={handleToggleModal}
                        id="dropdownRadioButton"
                        data-dropdown-toggle="dropdownRadio"
                        type="button"
                        className="text-white bg-gradient-to-r from-purple-800 via-purple-800 to-purple-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-500 dark:focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border border-purple-600"
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
                        Nuevo proyecto
                    </button>
                    {isModalOpen && (
                        <ModalNewProject onClose={handleToggleModal} />
                    )}
                </div>
                <div className="relative">
                    <div
                        data-v-df762e46=""
                        className="bg-gradient-to-br from-purple-600 via-purple-800 to-purple-900  backdrop-blur-2xl rounded-lg w-[180px] md:w-[250px] lg:w-[300px] 2xl:w-[350px] padding-0.5 h-10 flex justify-center items-center shrink-0"
                    >
                        <div
                            data-v-df762e46=""
                            className="w-[176px] md:w-[246px] lg:w-[296px] 2xl:w-[346px] h-9 bg-white/90 text-white dark:bg-slate-900/90 backdrop-blur-2xl rounded-lg overflow-hidden flex items-center pl-4"
                        >
                            <input
                                data-v-df762e46=""
                                type="search"
                                enterKeyHint="search"
                                className="w-full h-full outline-0 border-0 focus:ring-0 bg-transparent color-title text-base font-bold"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Buscar..."
                            />
                            <button
                                disabled
                                className="h-8 w-16 mr-0.5 flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-800 to-purple-900 rounded-lg border border-purple-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 32 32"
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
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
                                Coordinator
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
                        {filteredData.map((dato) => (
                            <tr
                                key={dato.id}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-600 dark:hover:text-cyan-100"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {dato.id}
                                </th>
                                <td className="px-6 py-4">
                                    <FormatearFecha
                                        fecha={dato.creation_date}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    {dato.description}
                                </td>
                                <td className="px-6 py-4">{dato.url}</td>
                                <td className="px-6 py-4">
                                    {dato.coordinator_name}
                                </td>
                                <td className="px-6 py-4">
                                    {dato.evaluator_name}
                                </td>
                                {/* <td className="px-6 py-4">Assigned</td> */}
                                <td className="px-6 py-4">
                                    <div>
                                        <button
                                            onClick={() =>
                                                handleResultButtonClick(dato.id)
                                            }
                                            type="button"
                                            className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border border-blue-600"
                                        >
                                            <svg
                                                className="w-4 h-4 me-2 -ms-1"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="paypal"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <rect
                                                    width="48"
                                                    height="160"
                                                    x="64"
                                                    y="320"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    rx="8"
                                                    ry="8"
                                                />
                                                <rect
                                                    width="48"
                                                    height="256"
                                                    x="288"
                                                    y="224"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    rx="8"
                                                    ry="8"
                                                />
                                                <rect
                                                    width="48"
                                                    height="368"
                                                    x="400"
                                                    y="112"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    rx="8"
                                                    ry="8"
                                                />
                                                <rect
                                                    width="48"
                                                    height="448"
                                                    x="176"
                                                    y="32"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="32"
                                                    rx="8"
                                                    ry="8"
                                                />
                                            </svg>
                                            Resultados
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleButtonClick(dato.id)
                                            }
                                            type="button"
                                            className="text-white bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-900/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2 border border-green-600"
                                        >
                                            <svg
                                                className="w-4 h-4 me-2 -ms-1"
                                                aria-hidden="true"
                                                focusable="false"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    fillRule="evenodd"
                                                    d="M1.516 6.36a4.844 4.844 0 1 1 9.687 0a4.844 4.844 0 0 1-9.687 0ZM6.359.015a6.344 6.344 0 1 0 3.723 11.48l2.195 2.195a1 1 0 0 0 1.415-1.414l-2.196-2.195A6.344 6.344 0 0 0 6.36.016Zm-.745 4.026a.625.625 0 0 1 0 .884L4.056 6.484l1.558 1.558a.625.625 0 0 1-.884.884l-2-2a.625.625 0 0 1 0-.884l2-2a.625.625 0 0 1 .884 0Zm2.5 0a.625.625 0 0 0-.884.884l1.558 1.558L7.23 8.042a.625.625 0 0 0 .884.884l2-2a.625.625 0 0 0 0-.884l-2-2Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
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
    );
}

export default ProjectTable;

function FormatearFecha({ fecha }) {
    const fechaObjeto = new Date(fecha);

    const dia = ("0" + fechaObjeto.getDate()).slice(-2);
    const mes = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ][fechaObjeto.getMonth()];

    const año = fechaObjeto.getFullYear();
    const hora = ("0" + fechaObjeto.getHours()).slice(-2);
    const minutos = ("0" + fechaObjeto.getMinutes()).slice(-2);

    const fechaFormateada = `${dia}-${mes}-${año}, ${hora}:${minutos}`;

    return <>{fechaFormateada}</>;
}
