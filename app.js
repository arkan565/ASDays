const Hapi = require('hapi');


const server = Hapi.server({
    host: 'localhost',
    port: 3000,
});

server.route(
    {
        method:'GET',
        path:'/'
    }
)
server.rout(
    {
        method:'GET',
        path:'editor'
    }
)