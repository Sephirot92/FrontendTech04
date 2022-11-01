console.log("REST SERVER APPLICATION");

const express = require('express');
const app = express();
const port = 8081;

app.get('/home', (req, res) => res.send('Nasz pierwszy serwer w Node.JS'));
app.listen(port, () => console.log(`Aplikacja działa na porcie ${port}`));


app.get('/salut/:userName', function (req, res) {
    let userName = req.params.userName;
    console.log(`Request userName=${userName}`);
    res.status(200).send(`Hello ${userName}!`);
});
