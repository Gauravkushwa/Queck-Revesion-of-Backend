const express = require("express");

const server = express();

server.use(express());

const user = { "id": 1, "name": "John Doe", "email": "john@example.com" }
 const users = [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" },
    { "id": 3, "name": "Bob Smith", "email": "bob@example.com" }
  ]
  

server.get("/users/get", (req, res) =>{
    res.status(200).json({
        success: true,
        message: "data fetch successfuly",
        data: user
    });
});

server.get("/users/list", (req, res) =>{
    res.status(200).json({
        success: true,
        message: "data fetch successfuly",
        data: users
    })
});

server.use((req, res) =>{
    res.status(404).json({
        success: false,
        message: "page not found",
    })
});

server.listen(3000, () =>{
    console.log(`server is running on http://localhost:3000`)
});