// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bf8f6194b621765175838c2')
    // },
    //     {
    //         $set: { completed: true }
    //     },
    //     { returnOriginal: false }
    // ).then((result) => {
    //     console.log(result);

    // });
    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('5bf0f76eb9ba670eb0791fdd') },
        { $set: { name: "Pooja" }, $inc: { age: 1 } },

        { returnOriginal: false }
    ).then((result) => {
        console.log(result);

    })

    // db.close();
});