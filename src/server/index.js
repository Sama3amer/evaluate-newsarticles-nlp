// TODO: Configure the environment variables
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');

dotenv.config();

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT;

const app = express();

app.use(cors());

// Use json
app.use(bodyParser.json());

// Use url encoded values
app.use(express.urlencoded({ extended: false }));

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'));
});

// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/api', async (req, res) => {
    debugger
    const { article_url } = req.body;
    const url = `${API_URL}?key=${API_KEY}&url=${article_url}&lang=en`;

    const response = await fetch(url)
    const mcData = await response.json()
    console.log(mcData)
    // res.send(mcData)
    //  server sends only specified data to the client with below codes
      const projectData = {
       score_tag : mcData.score_tag,
       agreement : mcData.agreement,
       subjectivity : mcData.subjectivity,
       confidence : mcData.confidence,
       irony : mcData.irony
      }
      res.send(projectData);
     
    // try {
    //     // { score_tag, agreement, subjectivity, confidence, irony }
    //     // const response = await fetch(url)
    //     // const jsonResponse = await response.json()
    //     // console.log(jsonResponse)
    //     // res.send(jsonResponse)
    //     await fetch(url
    //         // , {
    //         // method: 'POST',
    //         // mode: 'cors',
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         //     Accept: 'application/json'
    //         // }
    //     // }
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const { score_tag, agreement, subjectivity, confidence, irony } = data;
    //             res.send({
    //                 score_tag: score_tag,
    //                 agreement: agreement,
    //                 subjectivity: subjectivity,
    //                 confidence: confidence,
    //                 irony: irony
    //             });
    //         });
    // } catch (error) {
    //     console.log(error.message);
    // }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});

app.listen(8081, (error) => {
    debugger
    if (error) throw new Error(error);
    console.log(`Server listening on port ${PORT}!`);
});


// module.exports = {
//     app
// }
