const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
})

app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/hamilton.html'))
});

app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/clarke.html'))
});


app.get("/babbage", (req,resp)=>{
    resp.sendFile(path.join(__dirname,"./views/babbage"))
});

app.get("/berners-lee", (req,resp)=>{
    resp.sendFile(path.join(__dirname,"./views/berners-lee"))
});

app.get('/turing', (requ, resp)=>{
    resp.sendFile(path.join(__dirname, '/views/turing.html'));
});

app.get('/lovelace', (requ, resp)=>{
    resp.sendFile(path.join(__dirname, '/views/lovelace.html'));
});

