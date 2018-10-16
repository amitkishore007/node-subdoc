const mongoose = require('mongoose');
const PostSchema = require('./postSchema');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        name: {
                type     : String,
                required : [true, 'Username is required'],
                validate :{
                        validator: (name)=> name.length >2,
                        message: 'Username must be 3 charasters long'
                }
        },
        age: Number,
        posts: [PostSchema]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;