import React, { useEffect, useState } from "react";
import RangeValoration from "./RangeValoration";
import { useNavigate } from "react-router-dom";

const EvaluationHeuristic = ({ idProject, datos, setHeuristicName }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentHeuristicIndex, setCurrentHeuristicIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextHeuristic = () => {
        setCurrentHeuristicIndex((prevIndex) => prevIndex + 1);
        setCurrentPage(0);
    };

    const handlePrevHeuristic = () => {
        setCurrentHeuristicIndex((prevIndex) => prevIndex - 1);
        setCurrentPage(0);
    };

    const Heuristics = Array.from(
        new Set(datos.map((item) => item.id_heuristic))
    ).map((id_heuristic) => {
        return {
            id: id_heuristic,
            name: datos.find((item) => item.id_heuristic === id_heuristic)
                .heuristic,
        };
    });

    const currentHeuristic = Heuristics[currentHeuristicIndex];
    const filteredDataByHeuristic = datos.filter(
        (item) => item.id_heuristic === currentHeuristic.id
    );

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const selectedData = filteredDataByHeuristic.slice(startIndex, endIndex);

    const pageCount = Math.ceil(filteredDataByHeuristic.length / itemsPerPage);

    const [ratings, setRatings] = useState({});

    useEffect(() => {
        if (selectedData.length > 0) {
            setHeuristicName(selectedData[0].heuristic);
        }
    }, [selectedData]);

    const navigate = useNavigate();

    const evaluate = () => {

        const queryParams = new URLSearchParams({
            idProject: idProject
        }).toString();

        const postDataUrl =
            "https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/evaluate";

        const fetchData = async () => {
            try {
                const response = await fetch(postDataUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        idProject: idProject,
                        ratings: ratings,
                    }),
                });
                const data = await response.json();
                console.log("API response:", data);
            } catch (error) {
                console.error("Error sending data to API:", error);
            }
        };

        fetchData();

        navigate(`/evaluationfinish?${queryParams}`);
    };

    return (
        <div>
            <button
                onClick={evaluate}
                className="flex items-center justify-center text-white bg-gradient-to-r from-green-700 via-green-800 to-green-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-500 dark:focus:ring-green-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-900/80 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M3 21V3h14l4 4v2.15l-2 1.975v-3.3L16.175 5H5v14h6v2H3ZM5 5v14V5Zm8 18v-3.075l6.575-6.55l3.075 3.05L16.075 23H13Zm7.5-6.575l-.925-.925l.925.925Zm-6 5.075h.95l3.025-3.05l-.45-.475l-.475-.45l-3.05 3.025v.95Zm3.525-3.525l-.475-.45l.925.925l-.45-.475ZM6 10h9V6H6v4Zm6 8h.1l2.9-2.875V15q0-1.25-.875-2.125T12 12q-1.25 0-2.125.875T9 15q0 1.25.875 2.125T12 18Z"
                    />
                </svg>
                <span className="flex-1 ms-2 whitespace-nowrap">Guardar</span>
            </button>
            <table className="table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th scope="col" className="px-4 py-3 w-auto">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-3 w-8/12">
                            Heuristic
                        </th>
                        <th scope="col" className="px-4 py-3">
                            Evaluation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {selectedData.map((item, index) => (
                        <tr
                            key={item.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
                        >
                            <th
                                scope="row"
                                className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {startIndex + index + 1}
                            </th>
                            <td className="px-4 py-4 text-left">
                                {item.criterion}
                            </td>
                            <td className="px-4 py-4">
                                <RangeValoration
                                    rating={
                                        ratings[item.id]
                                            ? ratings[item.id].rating
                                            : 0
                                    }
                                    setRating={(newRating) =>
                                        setRatings((prevRatings) => ({
                                            ...prevRatings,
                                            [item.id]: {
                                                rating: newRating,
                                                idHeuristic: item.id_heuristic,
                                            },
                                        }))
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flow-root mt-4">
                <button
                    onClick={handlePrevHeuristic}
                    disabled={currentHeuristicIndex === 0}
                    className="flex items-center justify-center float-left text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-900/80"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 12 12"
                    >
                        <path
                            fill="currentColor"
                            d="m6.81 6l2.72-2.72a.75.75 0 0 0-1.06-1.06L5.22 5.47a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06L6.81 6ZM3 2.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0v-6.5Z"
                        />
                    </svg>
                    <span className="flex-1 ms-2 whitespace-nowrap">
                        Prev heuristic
                    </span>
                </button>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="flex items-center justify-center float-left text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-500 dark:focus:ring-cyan-900 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-900/80"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fill="currentColor"
                            d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
                        />
                    </svg>
                    <span className="flex-1 ms-2 whitespace-nowrap">
                        Prev criteria
                    </span>
                </button>

                <button
                    onClick={handleNextHeuristic}
                    disabled={currentHeuristicIndex === Heuristics.length - 1}
                    className="flex items-center justify-center float-right text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-900/80"
                >
                    Next heuristic
                    <span className="flex-1 ms-2 whitespace-nowrap">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 12 12"
                        >
                            <path
                                fill="currentColor"
                                d="M2.47 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L3.53 9.78a.75.75 0 0 1-1.06-1.06L5.19 6L2.47 3.28ZM9.75 10a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75Z"
                            />
                        </svg>
                    </span>
                </button>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pageCount - 1}
                    className="flex items-center justify-center float-right text-white bg-cyan-700 hover:bg-cyan-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-cyan-600 bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-500 dark:focus:ring-cyan-900 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-900/80"
                >
                    Next criteria
                    <span className="flex-1 ms-2 whitespace-nowrap">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill="currentColor"
                                d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default EvaluationHeuristic;
