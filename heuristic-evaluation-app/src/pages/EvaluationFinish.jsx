import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { UsePostData } from '../apis/UsePostData';

const EvaluationFinish = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idProject = queryParams.get("idProject");
    const ratings = JSON.parse(queryParams.get("ratings"));

    const isMountedRef = useRef(false);

    useEffect(() => {
        if (isMountedRef.current) {
            return;
        }

        isMountedRef.current = true;

        console.log(idProject);
        console.log(ratings);

        UsePostData("http://localhost:3000/api/evaluate", {
            idProject: idProject,
            ratings: ratings,
        });
    }, [idProject, ratings]);
    
    return (
        <div>
            <h1>Evaluation Finish</h1>
            <button
                type="button"
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
                Ver proyectos
            </button>

            <button
                className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
            >
                Ver resultados
            </button>
        </div>
    );

};

export default EvaluationFinish;
