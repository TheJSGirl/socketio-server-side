const server = require('http').createServer();

const io = require('socket.io')(server);

const config = {
    port: 3000,
    host: '0.0.0.0'
}
io.on('connection', client => {
   console.log('---------', client);
})

server.listen(config.port, config.host, (e) => {
    if(e) {
        throw new Error(e.message);
    }
    console.log(`App is running at port ${config.port} & host is ${config.host}`)
});