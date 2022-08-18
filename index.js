const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
});

// app.get('/user/:id', (req, res) => {
//     const rou = req.params;
//     console.log(rou);

//     res.json({'userid' : rou.id});
// });

// params

app.get('/user/:id', (req, res) => {
    const q = req.query;
    console.log(q);
    
    res.json({'height' : q.height});
})

//query

app.listen(3000, ()=>console.log('now running'));