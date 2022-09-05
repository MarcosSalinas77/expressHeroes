const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
})



































app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/hopper.html'));
    })

