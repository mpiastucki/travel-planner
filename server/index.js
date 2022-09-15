require('dotenv').config();
const path = require('path')
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = {"users": [
    {"username": "mpiastucki", "password":"manju"}
]
}

app.use(express.static(path.resolve(__dirname, "../build")));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"))
})

app.use(express.json());
app.post("/api/login", (req, res)=>{
    console.log(req.body)
    const username = req.body.username;
    const password = req.body.password;

    for (user of db["users"]){
        console.log(user)
        if (user["username"] == username && user["password"] == password){
            console.log("found user!")
            res.status(200).json({"canLogin": true});

        } else {
            res.status(200).json({"canLogin":false})
        }
    }

    
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})