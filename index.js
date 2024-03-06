const express = require('express');
const fs = require('fs');
const app = express();

const port = 8000;

app.use((req, res, next) => {
    console.log("Request Made")
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', (req, res) => {
    res.sendFile('./views/main.html', {root:__dirname })

});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root:__dirname })
});

app.get('/portfolio', (req, res) => {
    res.sendFile('./views/portfolio.html', {root:__dirname })
});

app.get('/profile', (req, res) => {
        res.sendFile('./views/profile.html', {root:__dirname })
});

app.get('/uniquepage', (req, res) => {
    res.sendFile('./views/uniquepage.html', {root:__dirname })
});

app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', {root:__dirname })
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
