const server = require('http').createServer();

const io = require('socket.io')(server);

const config = {
    port: 3000,
    host: '0.0.0.0'
}

// io.on supports defaults events
const userData = [];
io.on('connection', socket => {
    // broadcast message to all the clients
   io.sockets.emit("hellloooo everyone")

   // customer 'register event to get user data
    socket.on('register', (data) => {
        userData.push(data);
    })
   // create 'chat' event
   socket.on('chat', (data) => {
       console.log('chat data', data)
   })
})


server.listen(config.port, config.host, (e) => {
    if(e) {
        throw new Error(e.message);
    }
    console.log(`App is running at port ${config.port} & host is ${config.host}`)
});