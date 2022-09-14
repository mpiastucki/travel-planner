require('dotenv').config();
const path = require('path')
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"))
})

app.get("/api/login", (req, res)=>{
    
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})