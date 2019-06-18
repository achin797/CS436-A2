const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

// console.log that your server is up and running

app.use(bodyParser.json());

let messages = [{key: 1, text: 'hello'}, {key: 2, text: 'i am'}, {key: 3, text: 'content'}];

app.listen(port, () => console.log('Listening on port ${port}'));


// create a GET route
app.get('/express_backend', (req, res) => {
    delay();
    res.send(messages);
});


//create a POST route
app.post('/express_backend', function (req, res) {
    delay();
    const newMessage = req.body;
    messages.push(newMessage);
    res.setHeader('Content-Type', 'application/json');
    res.send(messages);
});

//create a DELETE route
app.delete('/express_backend/:id', function (req, res) {
    delay();
    let key = parseInt(req.params.id);
    messages = messages.filter(function (message) {
            return (message.key !== key);
        });
    res.setHeader('Content-Type', 'application/json');
    res.send(messages);
});

function delay(){
    let stopTime = Date.now() + 1000;
    while (Date.now() < stopTime){}
}