import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { usePostData } from '../hooks/usePostData';

const EvaluationFinish = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idProject = queryParams.get("idProject");
    const ratings = JSON.parse(queryParams.get("ratings"));

    const isMountedRef = useRef(false);

   useEffect(() => {
       const postDataUrl = "https://heuristic-evaluation-api-fxov-dev.fl0.io/api/evaluate";

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
   }, [idProject, ratings]);

    
    const navigate = useNavigate();

    const handleButtonClick = (idProject) => {
        navigate(`/evaluationresults/${idProject}`);
    };
    
    return (
        <div class="flex flex-col items-center justify-center h-screen">
            <div
                class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
            >
                <span class="font-medium">Evaluation finish!</span>
            </div>

            <div class="flex">
                <button
                    type="button"
                    class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                    Ver proyectos
                </button>

                <button
                    onClick={() => handleButtonClick(idProject)}
                    class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                >
                    Ver resultados
                </button>
            </div>
        </div>
    );

};

export default EvaluationFinish;
