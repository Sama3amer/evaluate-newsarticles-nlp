const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
// const router = express.Router();

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
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
});
app.post('/api', async (req, res) => {
    const { article_url } = req.body;
    const url = `${API_URL}?key=${API_KEY}&url=${article_url}&lang=en`;
console.log("API=====>",url);
    const response = await fetch(url)
    const mcData = await response.json()
    console.log(mcData)
      const data = {
       score_tag : mcData.score_tag,
       agreement : mcData.agreement,
       subjectivity : mcData.subjectivity,
       confidence : mcData.confidence,
       irony : mcData.irony
      }
      res.send(data);
     
  
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
});
// app.use("/", router);

app.listen(8081, (error) => {
    if (error) throw new Error(error);
    console.log(`Server listening on port ${PORT}!`);
});


module.exports =app;
