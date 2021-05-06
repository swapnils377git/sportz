const path = require('path');
const fs = require('fs');

module.exports.route = function (app) {

    // const jsonFileReader = function (filepath, cb) {

    //     fs.readFile(filepath, 'utf8', (err,filedata) => {
    //         if (err) {
    //             throw err;
    //             return cb && cb(err);
    //         }
    //         else {
    //             try {
    //                 const data = JSON.parse(filedata);
    //                 // console.log(data);
    //                 // return data;
    //                 return cb && cb(null, data);
                    
    //             } catch (err) {
    //                 console.log(`Error parsing JSON ${err}`);
    //                 // return err;
    //                 return cb && cb(err);
    //             }
    //         }
            
    //     });
    // }

    // app.get('/', (req, res) => {
    //     res.sendFile(`${path.join(__dirname, 'public')}//html/index.html`);
    // });

    // app.get('/countries', (req, res) => {
    //     jsonFileReader('./data/data.json', (err,filedata) => {
    //         if (err) {
    //             console.log(err);
    //             res.json(err);
    //         }
    //         else {
    //             // console.log(filedata);
    //             res.json(filedata);
    //         }
    //     });
    // });

    // app.post('/country', (req, res) => {
    //     let obj = req.body;
    //     console.log(obj);
    // });

}