const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
})


app.get("/babbage", (req,resp)=>{
    resp.sendFile(path.join(__dirname,"./views/babbage"))
});

app.get("/babbage", (req,resp)=>{
    resp.sendFile(path.join(__dirname,"./views/berners-lee"))
});