import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthentication = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Username:", email);
        console.log("Password:", password);

        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                props.setAuthenticated(true);
                navigate("/home");
            })
            .catch((error) => console.error(error));
    };

    return { email, setEmail, password, setPassword, handleSubmit };
};

export default useAuthentication;
