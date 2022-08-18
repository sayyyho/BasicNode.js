const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/dog', (req, res) => {
    res.json({'key' : 'value'});
});
app.get('/cat', (req, res) => {
    res.json({'key' : 'value'});
});

app.listen(3000, ()=>console.log('now running'));