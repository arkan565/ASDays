const Hapi = require('hapi');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

const fileManager = require('./librarys/fileManager.js');

const server = Hapi.server({
    host: 'localhost',
    port: 3000,
});

server.route(
    {
        method:'GET',
        path:'/',
         async handler(){
            let data = {
                day: fileManager.readDay(new Date())
            }
            app.handleRequest(req,res,'/index',data);
        }
    }
)
server.route(
    {
        method:'GET',
        path:'/editor/:date',
        async handler() {

        }
    }
)
server.route({
    method: 'POST',
    path: '/editor/:date',
    async handler(){

    }
})