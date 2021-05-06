const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const fs = require('fs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
const route = require('./route');
const path = require('path');
const multer = require('multer');
const lodash = require('lodash');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(`${path.join(__dirname, 'public')}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route.route(app);

const jsonFileReader = function (filepath, cb) {

    fs.readFile(filepath, 'utf8', (err,filedata) => {
        if (err) {
            throw err;
            return cb && cb(err);
        }
        else {
            try {
                const data = JSON.parse(filedata);
                // console.log(data);
                // return data;
                return cb && cb(null, data);
                
            } catch (err) {
                console.log(`Error parsing JSON ${err}`);
                // return err;
                return cb && cb(err);
            }
        }
        
    });
}

const findCountry = function (arrData, id) {
    let arr = [];
    
    const result = arrData.filter((value, index) => {
        // console.log(value);
        // console.log(index);
        // console.log(id);
        if (index === id) {
            // console.log(value);
            arr.push(value);
            return arr;
        }
        
    })
    console.log(result[0]);
    return result[0]
}

app.get('/', (req, res) => {
    res.sendFile(`${path.join(__dirname, 'public')}//html/index.html`);
});

app.get('/countries', (req, res) => {
    jsonFileReader('./data/data.json', (err,filedata) => {
        if (err) {
            console.log(err);
            res.json(err);
        }
        else {
            // console.log(filedata);
            res.json(filedata);
        }
    });
});

app.post('/country/countryid', (req, res, next) => {
    let obj = req.body;
    // console.log(req.body.countryid);
    let countryid = parseInt(req.body.countryid);
    let i;
    const rawdata = JSON.parse(fs.readFileSync('./data/data.json').toString());
    // console.log(rawdata.countries);
    const arrData = rawdata.countries;
    // console.log(arrData.length);
    let countryArr = [];
    const country = findCountry(arrData, countryid);
    countryArr.push(country);
    console.log(countryArr);
    res.json(countryArr)
});

app.post('/country', (req, res, next) => {
    let obj = req.body;
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});