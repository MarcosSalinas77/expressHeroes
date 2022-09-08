const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Escuchando puerto ${port}`);
})

app.get("/register", (req, resp) => {
    resp.sendFile(path.join(__dirname, "views/register.html"));
  });

  app.get("/login", (req, resp) => {
    resp.sendFile(path.join(__dirname, "views/login.html"));
  });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});



