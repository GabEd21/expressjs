var admin = require("firebase-admin");

var serviceAccount = require("./dbexpress-6ca08-firebase-adminsdk-r2dtf-9743be7b7d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore()
const schema = db.collection(`schema`)
const cors = require('cors');
const student = db.collection(`student`);


// server.js


const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(
    cors({
        origin: true,
        credential: true,
        optionSuccessStatus: 200
    })
)

app.get('/', async (req,res) => {
    const studentSnapshot = await student.get();
    const studentsList = studentSnapshot.docs.map(doc => doc.data());
    res.json(studentsList)
})



var weather = require('weather-js');
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory
const about = require('./module');

 
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

app.get('/japan', (req, res) => {
    weather.find({search: 'Japan', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherjapan: eval(JSON.stringify(result, null, 2))
            }
            res.render('japan', data)
        }
    });
});

app.get('/thailand', (req, res) => {
    weather.find({search: 'Thailand', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weatherthailand: eval(JSON.stringify(result, null, 2))
            }
            res.render('thailand', data)
        }
    });
});

app.get('/singapore', (req, res) => {
    weather.find({search: 'Singapore', degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
        else{
            let data = {
                weathersingapore: eval(JSON.stringify(result, null, 2))
            }
            res.render('singapore', data)
        }
    });
});

app.get('/index', async (req, res) => {
    const item = await schema.get()
    let data = {
        itemData: item.docs,
        heading: "hello",
        song: "lord patawad"
    }
    res.render('index', data);
});

app.get('/about', (req, res) => {
    res.render('about', { about });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { name: 'Christian Dumandan', para: 'paragraph' });
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
