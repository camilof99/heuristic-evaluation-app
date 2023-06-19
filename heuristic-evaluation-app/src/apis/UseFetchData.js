import { useState, useEffect } from "react";

export const useFetchData = (url) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error("Error al obtener los datos de la API:", error);
            }
        };

        fetchData();
    }, [url]);

    return datos;
};
