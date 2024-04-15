// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


var weather = require('weather-js');

 
// Set EJS as the view engine
app.set('view engine', 'ejs');


// Define a route to render the EJS template

app.get('/', (req, res) => {
    res.sendFile('./views/main.html', {root:__dirname })
});

app.get('/davao', (req, res) => {
    weather.find({search: 'Davao, Philippines', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherdavao: eval(JSON.stringify(result, null, 2))
            }
            res.render('davao', data)
        }
    });
});

app.get('/canada', (req, res) => {
    weather.find({search: 'Canada', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathercanada: eval(JSON.stringify(result, null, 2))
            }
            res.render('canada', data)
        }
    });
});


app.get('/index', (req, res) => {
    res.render('index', { username: 'John', para: 'paragraph' });
});

app.get('/about', (req, res) => {
    res.render('about', { name: 'Christian Ed Gabriel S. Dumandan', title: 'My Life', paragraph: 'Hello! I am Christian Ed Gabriel S. Dumandan, when I was high school I was known as a drug lord and some of the teachers called me that, However since it was a famous word the decided to take me on a Drug test In the letter it says I was randomly and I recceive this letter twice in a month I am also a very known as Padre Damaso ',
                sech: 'The Unexpected Role', parasec: 'INT. HIGHSCHOOL CLASSROOM - Afternoon', paragraph2: '', bold1: 'Female Teacher:', bold2: 'MULTIPLE STUDENT:' });
});

app.get('/portfolio', (req, res) => {
    res.render('index', { username: 'John', para: 'paragraph' });
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
