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

// const express= require('express');
// const app= express();
// const http= require('http').Server(app);
// const io= require('socket.io')(http);

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// });

// io.of('/namespace1').on('connection', (socket)=>{
//     console.log('a user connected to the server');
//     socket.on('disconnect', ()=> console.log('a user has left us'));
//     socket.on('chatmessage', function(msg){
//         console.log('message: ' + msg);
//         io.of('/namespace1').emit('chatmessage', msg);
//     });
// });

// http.listen(3030);

// ===============================================================

const express= require('express');
const app= express();
const http= require('http').Server(app);
const io= require('socket.io')(http);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    socket.on('disconnect', ()=> console.log('a user has left us'));

    let chatroom = null

    socket.on('subscribe', (room)=>{
        chatroom = room;
        socket.join(room);
        console.log('a user has connected to the room ' +room );
    })

    socket.on('chat message', function(msg){
        console.log('message: ',  msg);
        io.to(chatroom).emit('chat message', msg);
    });
});

http.listen(4000);