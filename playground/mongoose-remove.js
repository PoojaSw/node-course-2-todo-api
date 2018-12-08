
const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
    
// })

// Todo.findOneAndRemove({_id:''}).then((result)=>{
//     console.log(result);
//   });

  Todo.findByIdAndRemove('5c0b5e2b82ce5c1844b74cb7').then((result)=>{
    console.log(result);
  });