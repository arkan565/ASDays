const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const bodyParser = require("body-parser");
const fileManager = require('./fileManager.js');
app.prepare()
    .then(() => {
        const server = express()
        server.use(express.static('res'));
        server.use(bodyParser.urlencoded({ extended: false }));
        server.use(bodyParser.json());
        server.get('/', (req, res) => {
            app.handleRequest(req, res, `/index`);
        });
        
        server.get('/day', (req, res) => {
            if(!req.params.id){
                return res.send(JSON.stringify(fileManager.readDay(new Date())))
            }
        });
        server.get('/editor/:date',(req,res) =>{

            data = fileManager.readExactDay(req.params.date);
            if(data==null){
                return res.send({activities:[]});
            }else{
                return res.send(JSON.stringify(data));
            }
            
        });
        server.get('*', (req, res) => {
            return app.handleRequest(req, res)
        });
        server.post('/editor/:date',(req,res) =>{
            fileManager.writeDay(req.body.date,{activities:req.body.activities})
            res.send(JSON.stringify({message:"day saved"}));
        })
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('>Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });