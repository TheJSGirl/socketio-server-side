const server = require('http').createServer();

const io = require('socket.io')(server);

const config = {
    port: 3000,
    host: '0.0.0.0'
}

// io.on supports defaults events
const userData = [];
const chatHistory = [];
console.log("username", userData)
io.on('connection', socket => {
    // broadcast message to all the clients
   io.sockets.emit("hellloooo everyone")

   // commanding client to listen this event
    socket.emit('register');

   // customer 'register' event to get user data
    socket.on('register', (data) => {
        // check user already exist
       if(userData[data.username]) {
        throw new Error('user already exists');
       }
        userData[data.username] = socket.id;
    })
    

   //// {from,to, message}
    socket.on('public-chat-server', (data) => {
        chatHistory.push(data);
        io.emit('public-chat-client',data);
    })
})


server.listen(config.port, config.host, (e) => {
    if(e) {
        throw new Error(e.message);
    }
    console.log(`App is running at port ${config.port} & host is ${config.host}`)
});