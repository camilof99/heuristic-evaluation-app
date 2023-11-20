import React from 'react'
import Navbar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/UseFetchData';
import ReactECharts from 'echarts-for-react';

const EvaluationResults = () => {
    const { idProject } = useParams();
    const url = `https://heuristic-evaluation-api-dev-dres.4.us-1.fl0.io/api/evaluationresults/${idProject}`;

    const results = useFetchData(url);

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

    console.log('Promedio Usabilidad: ' + (sumMean/11)/5*100);

    const chartOptions = generateChartOptions(data);
    const scoreChartOptions = generateScoreChartOptions(data);

    return (
        <>
            <div className="flex flex-col p-4 h-full border border-red-400">
                <Navbar />
                <div className="w-full flex-1 p-6 border border-blue-400 bg-white dark:bg-gray-900 rounded-md shadow-xl">
                    <div className="text-center">
                        <span class="bg-green-100 text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            Nivel de usabilidad:{" "}
                            {((sumMean / 11 / 5) * 100).toFixed(3)}%
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
                                            Puntaje
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
                                                    {mean}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {standardDeviation}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="w-1/2">
                            <h3 className="px-8 text-white text-center">
                                Desviación estándar - Resultados:
                            </h3>
                            <ReactECharts option={chartOptions} />
                            <h3 className="px-8 text-white text-center mt-8">
                                Puntaje - Resultados:
                            </h3>
                            <ReactECharts option={scoreChartOptions} />
                        </div>
                    </div>
                    <div>
                        <h3 className="px-8 text-white">Recomendaciones:</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

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