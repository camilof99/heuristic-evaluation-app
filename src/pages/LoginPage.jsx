import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage(props) {
    
    return (
        <LoginForm setAuthenticated={props.setAuthenticated} />
    );
}

export default LoginPage;
