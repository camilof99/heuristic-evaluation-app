const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "heuristic_evaluation_bd",
});

connection.connect((error) => {
    if (error) {
        console.error("Error de conexión: ", error);
    } else {
        console.log("Conexión exitosa a la base de datos.");
    }
});

app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('====================================');
        console.log(email);
        console.log(password);
        console.log(req.body);
        console.log('====================================');

        const query_sql =
            "SELECT email, password FROM user WHERE email = ? AND password = ?";

        connection.query(query_sql, [email, password], (error, results) => {
            if (error) {
                console.error("Error en la consulta: ", error);
                res.status(500).send("Error interno del servidor.");
            } else if (results.length === 0) {
                res.status(401).send("Credenciales inválidas.");
            } else {
                const user = results[0];
                const token = jwt.sign({ id: user.id }, "mysecretkey");
                res.send({ token });
            }
        });
    } catch (error) {
        console.error("Error en la consulta: ", error);
        res.status(500).send("Error interno del servidor.");
    }
});

// app.get("/api/login", async (req, res) => {
//     try {
//         const query_sql = "SELECT username, password FROM user";

//         connection.query(query_sql, (error, results) => {
//             if (error) {
//                 console.error("Error en la consulta: ", error);
//                 res.status(500).send("Error interno del servidor.");
//             } else {
//                 const users = results;
//                 console.log(users);
//                 res.send(users);
//             }
//         });
//     } catch (error) {
//         console.error("Error en la consulta: ", error);
//         res.status(500).send("Error interno del servidor.");
//     }
// });

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});