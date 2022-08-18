const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World')
});

// app.get('/user/:id', (req, res) => {
//     const rou = req.params;
//     console.log(rou);

//     res.json({'userid' : rou.id});
// });

// params

app.get('/sound/:name', (req, res) => {
    const p = req.params;
    const { name } = req.params; // :name 으로 들어온게 req.params에 {name : 들어온 놈}일텐데 { name } = req.parms 하면 name에는 들어온 놈이 할당
    res.json({'name' : p.name});
    console.log(p);
});

//query

app.listen(3000, ()=>console.log('now running'));