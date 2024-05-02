import React from "react";
import Navbar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { useFetchData } from "../hooks/UseFetchData";
import ReactECharts from "echarts-for-react";

const EvaluationResults = () => {
    const { idProject } = useParams();
    const url = `https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/evaluationresults/${idProject}`;

    const results = useFetchData(url);

    console.log(results);

    const resultsByProject = results.reduce((acc, result) => {
        const projectId = result.id_project;
        if (!acc[projectId]) {
            acc[projectId] = [];
        }
        acc[projectId].push(result);
        return acc;
    }, {});

     console.log(resultsByProject);
     const projectIds = Object.keys(resultsByProject);
     console.log(projectIds.length);
     console.log(projectIds);

    const data = {};

    const resultsByHeuristic = {};

    for (const result of results) {
        const heuristicId = result.id_heuristic;

        if (!resultsByHeuristic.hasOwnProperty(heuristicId)) {
            resultsByHeuristic[heuristicId] = {
                count: 0,
                sum: 0,
                squaredSum: 0,
            };
        }

        const heuristicData = resultsByHeuristic[heuristicId];
        heuristicData.count++;
        heuristicData.sum += result.valoration;
        heuristicData.squaredSum += result.valoration ** 2;
    }

    for (const heuristicId in resultsByHeuristic) {
        const heuristicData = resultsByHeuristic[heuristicId];
        const count = heuristicData.count;
        const mean = heuristicData.sum / count;

        console.log(mean);
        console.log(heuristicData.squaredSum);

        const squaredDifferencesSum =
            heuristicData.squaredSum - heuristicData.sum ** 2 / count;

        console.log("g" + squaredDifferencesSum);
        const standardDeviation = Math.sqrt(squaredDifferencesSum / count);

        data[heuristicId] = {
            count,
            mean,
            standardDeviation,
        };

        console.log(data);
    }

    const sumMean = Object.values(data).reduce(
        (total, item) => total + item.mean,
        0
    );

    const proMean = Object.values(data).reduce(
        (total, item) => total + item.mean,
        0
    );

    const proUsa = proMean / 11;
    const porCum = (sumMean / 11 / 5) * 100;
    
    console.log("Promedio Usabilidad: " + proUsa);
    console.log("Porcentaje Cumplimiento: " + porCum);

    const chartOptions = generateChartOptions(data);
    const scoreChartOptions = generateScoreChartOptions(data);
    const porceChartOptions = generatePorceChartOptions(data);


    return (
        <>
            <div className="flex flex-col p-4 h-full border border-red-400">
                <Navbar />
                <div className="w-full flex-1 p-6 border border-blue-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                    <div className="text-center">
                        <span
                            className={`text-xl font-medium mr-2 px-2.5 py-0.5 rounded-full ${
                                proUsa >= 4
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                    : proUsa >= 3
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                        >
                            Promedio general de usabilidad: {proUsa.toFixed(3)}
                        </span>

                        <span
                            className={`text-xl font-medium mr-2 px-2.5 py-0.5 rounded-full ${
                                porCum >= 80
                                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                    : porCum >= 60
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }`}
                        >
                            Porcentaje cumplimiento: {porCum.toFixed(3)}%
                        </span>
                    </div>
                    <br />
                    <div className="flex">
                        <div className="w-1/2">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr className="text-center">
                                        <th scope="col" className="px-6 py-3">
                                            Heuristica
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Criterios evaluados
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Promedio evaluación
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Porcentaje cumplimiento
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Desviación estandar
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(data).map(
                                        ([
                                            heuristicId,
                                            { count, mean, standardDeviation },
                                        ]) => (
                                            <tr
                                                key={heuristicId}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    H{heuristicId}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {count}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {Number.isInteger(mean)
                                                        ? mean.toFixed(0)
                                                        : mean.toFixed(3)}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {Number.isInteger(
                                                        (mean / 5) * 100
                                                    )
                                                        ? (
                                                              (mean / 5) *
                                                              100
                                                          ).toFixed(0)
                                                        : (
                                                              (mean / 5) *
                                                              100
                                                          ).toFixed(2)}{" "}
                                                    %
                                                </td>
                                                <td className="px-6 py-4">
                                                    {Number.isInteger(
                                                        standardDeviation
                                                    )
                                                        ? standardDeviation.toFixed(
                                                              0
                                                          )
                                                        : standardDeviation.toFixed(
                                                              3
                                                          )}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>

                            <br />

                            <h3 className="px-6 text-white">
                                Recomendaciones:
                            </h3>
                        </div>
                        <div
                            className="w-1/2"
                            style={{
                                marginBottom: "50px",
                            }}
                        >
                            <ReactECharts
                                option={scoreChartOptions}
                                style={{
                                    marginBottom: "-20px",
                                }}
                            />
                            <p className="px-8 text-white text-center">
                                Promedio evaluación por heurística
                            </p>

                            <ReactECharts
                                option={chartOptions}
                                style={{
                                    marginBottom: "-20px",
                                }}
                            />
                            <h3 className="px-8 text-white text-center">
                                Desviación estándar por heurística
                            </h3>

                            <ReactECharts
                                option={porceChartOptions}
                                style={{
                                    marginBottom: "-20px",
                                }}
                            />
                            <p className="px-8 text-white text-center">
                                Porcentaje cumplimiento por heurística
                            </p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default EvaluationResults;

const generateChartOptions = (data) => {
    const xAxisData = Object.keys(data);
    const seriesData = Object.values(data).map((item) =>
        item.standardDeviation.toFixed(3)
    );

    return {
        xAxis: {
            type: "category",
            data: xAxisData,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "bar",
                data: seriesData,
                label: {
                    show: true,
                    formatter: "{c}",
                },
            },
        ],
    };
};

const generateScoreChartOptions = (data) => {
    const xAxisData = Object.keys(data);
    const seriesData = Object.values(data).map((item) => item.mean.toFixed(3));

    return {
        xAxis: {
            type: "category",
            data: xAxisData,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "bar",
                data: seriesData,
                label: {
                    show: true,
                    formatter: "{c}",
                },
            },
        ],
    };
};

const generatePorceChartOptions = (data) => {
    const xAxisData = Object.keys(data);
    const seriesData = Object.values(data).map((item) => ((item.mean/5)*100).toFixed(2));

    return {
        xAxis: {
            type: "category",
            data: xAxisData,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                type: "line",
                data: seriesData,
                label: {
                    show: true,
                    formatter: "{c} %",
                },
            },
        ],
    };
};
