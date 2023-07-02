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
            idProject: idProject,
            ratings: JSON.stringify(ratings),
        }).toString();

        navigate(`/evaluationfinish?${queryParams}`);
    };

    return (
        <div>
            <button
                onClick={evaluate}
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
                Guardar
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
                    className="float-left focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Prev Heuristic
                </button>
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 0}
                    className="float-left text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Prev Page
                </button>

                <button
                    onClick={handleNextHeuristic}
                    disabled={currentHeuristicIndex === Heuristics.length - 1}
                    className="float-right focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Next Heuristic
                </button>

                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pageCount - 1}
                    className="float-right text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default EvaluationHeuristic;
