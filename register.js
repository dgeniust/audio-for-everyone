// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const path = require('path');


// app.use(express.json())
// app.use(express.urlencoded({ extended : false }));
// const users = []


// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name === req.body.name)
//     if(user == null)
//     {
//         return res.status(400).send("Cannot find user");
//     }
//     try {
//         if(await bcrypt.compare(req.body.password, user.password)){
//             res.send("Success");
//         }
//         else {
//             res.send("Error");
//         }
//     } catch {
//         req.status(500).send();
//     }
// })

// // app.set('view engine', 'html');
// // app.get('/', function(req, res){
// //     res.sendFile(process.cwd() + '/index.html');
// // });

// app.get('/index.html', (req, res)=> {
//     res.render('index.html')
// });
// app.post('/index.html', (req, res)=> {
//     res.render('index.html')
// });

// app.get('/register', (req, res)=> {
//     res.render('register')
// });

// app.post('/register', async (req, res) => {
//     try{
//         const hashPassword = await bcrypt.hash(req.body.password, 10)
//         users.push({
//             id:Date.now().toString(),
//             name : req.body.name,
//             email : req.body.email,
//             password : hashPassword
//         })
//         // res.redirect('/index.html')
//         console.log(users)
//     }
//     catch {
//         res.redirect('/register')
//     }
//     console.log(users)
// });

// app.listen(3000);