const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

//MongoDB setup
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://user:Password1@ds245927.mlab.com:45927/heroku_k4pzlqk9");

// console.log that your server is up and running

app.use(bodyParser.json());

//Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let messageSchema = new mongoose.Schema({
    key: Number,
    text: String,
});

let Message = mongoose.model("Messages", messageSchema);


app.listen(port, () => console.log('Listening on port ${port}'));


// create a GET route
app.get('/express_backend', (req, res) => {
    delay();
    Message.find({}, function (err, messageList) {
            if (err) {
                console.log(err);
            } else {
                res.send(messageList);
            }
        }
    );
});


//create a POST route
app.post('/express_backend', function (req, res) {
    delay();
    let newMessage = new Message({
        key: req.body.key,
        text: req.body.text,
    });
    Message.create(newMessage, function (err, Item) {
        if (err) {
            console.log(err);
        } else {
            Message.find({}, function (err, messageList) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.setHeader('Content-Type', 'application/json');
                        res.send(messageList);
                    }
                }
            );
        }
    })
});

//create a DELETE route
app.delete('/express_backend/:id', function (req, res) {
    delay();
    let key = parseInt(req.params.id);
    Message.remove({key: key}, function (err) {
        if (err) {
            console.log(err);
        }
        else{
            Message.find({}, function (err, messageList) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.setHeader('Content-Type', 'application/json');
                        res.send(messageList);
                    }
                }
            );
        }
    });
});

function delay() {
    let stopTime = Date.now() + 1000;
    while (Date.now() < stopTime) {
    }
}