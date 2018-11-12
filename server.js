const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const fileManager = require('./fileManager.js');
let date = new Date();
console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}.json`)
app.prepare()
    .then(() => {
        const server = express()
        server.use(express.static('res'));
        server.get('/', (req, res) => {
            app.handleRequest(req, res, `/index`);
        });
        
        server.get('/day', (req, res) => {
            if(!req.params.id){
                return res.send(JSON.stringify(fileManager.readDay(new Date())))
            }
        });
        server.get('/editor/:date',(req,res) =>{
            let data={
                day:req.params.date
            };
            app.handleRequest(req, res, '/editor', data);
        });
        server.get('*', (req, res) => {
            return app.handleRequest(req, res)
        });
        server.post('/editor/:date',(req,res) =>{
             let form = new formidable.IncomingForm();

             form.parse(req);

             form.on('fileBegin', function (name, file) {
                 file.path = './temp/' + file.name;
             });

             form.on('file', function (name, file) {
                 let tempfile = './temp/' + file.name;
                 let day = req.channelid;
                 let daydir = `./res/img/${day}`;
                 if (!fs.existsSync(daydir)) {
                     fs.mkdirSync(daydir);
                 }
                 //eliminar archivos de la carpeta
                 try {
                     var files = fs.readdirSync(daydir);
                 } catch (e) {
                     return;
                 }
                 if (files.length > 0)
                     for (var i = 0; i < files.length; i++) {
                         var filePath = daydir + '/' + files[i];
                         if (fs.statSync(filePath).isFile())
                             fs.unlinkSync(filePath);
                         else
                             rmDir(filePath);
                     }
                 fs.rmdirSync(usudir);
                 fs.unlinkSync(tempfile);
                 res.end();
             });
             
             
        })
        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    });