// const express= require('express');
// const app= express();
// const http= require('http').Server(app);
// const io= require('socket.io')(http);

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket)=>{
//     console.log('A user has connected to the server.')
// })

// http.listen(3030);


// // =================================================================

// //this code works 

// const express= require('express');
// const app= express();
// const http= require('http').Server(app);
// const io= require('socket.io')(http);

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket) => {
//     console.log('a user connected to the socket');
//     socket.on('disconnect', () => console.log('a user left us'));
//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);

//     io.emit('chat message', msg);
//   });
// });

// http.listen(3030);

// // ===========================================================================

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let one = io.of('/namespace1');
one.max_connections = 3;
one.current_connections = 0;

one.on('connection', (socket) => {
    if (one.current_connections >= one.max_connections) {
        socket.emit('disconnect', 'I\'m sorry, too many connections');
        socket.disconnect()

    } else {
        one.current_connections++;
        console.log(one.current_connections)
        console.log('a user connected to namespace1');

        socket.on('chatmessage', function (msg) {
            console.log('message: ' + msg);
            one.emit('chatmessage', msg)
        })
        socket.on('disconnect', () => {
            console.log('a user has left us')
        });
    }
})

// let two = io.of('/namespace2');
// two.max_connections = 3;
// two.current_connections = 0;
// two.on('connection', (socket) => {
//     two.current_connections ++;
//     console.log(two.current_connections)
//     console.log('a user connected to namespace2');

//     socket.on('chatmessage', function (msg) {
//         console.log('message: ' + msg);
//         one.emit('chatmessage', msg)
//     })
//     socket.on('disconnect', () => {
//         console.log('a user has left us')
//     });

// })


http.listen(3030);

// ===============================================================

// const express= require('express');
// const app= express();
// const http= require('http').Server(app);
// const io= require('socket.io')(http);

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', (socket)=>{
//     socket.on('disconnect', ()=> console.log('a user has left us'));

//     let chatroom = null

//     socket.on('subscribe', (room)=>{
//         chatroom = room;
//         socket.join(room);
//         console.log('a user has connected to the room ' +room );
//     })

//     socket.on('chat message', function(msg){
//         console.log('message: ',  msg);
//         io.to(chatroom).emit('chat message', msg);
//     });
// });

// http.listen(4000);