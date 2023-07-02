export const UsePostData = (url, variables) => {
    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(variables),
            });
            const data = await response.json();
        } catch (error) {
            console.error("Error al obtener los datos de la API:", error);
        }
    };

    fetchData();
};
