const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
})


app.get('/turing', (requ, resp)=>{
    resp.sendFile(path.join(__dirname, '/views/turing.html'));
});

app.get('/lovelace', (requ, resp)=>{
    resp.sendFile(path.join(__dirname, '/views/lovelace.html'));
});
