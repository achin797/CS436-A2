db = db.getSiblingDB("messages");
db.messages.drop();
db.messages.insertMany([{key: 1, text: 'hello'}, {key: 2, text: 'i am'}, {key: 3, text: 'content'}]);