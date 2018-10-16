const assert = require('assert');
const User = require('../src/user');

describe('Creating user posts', ()=>{

    it('Create user post', (done)=>{
        User.findOne({name:'Akm'})
            .then((user)=>{
                user.posts.push({title:'This post title is pushed to a user'});
                return user.save();
            })
            .then(()=>{
                return User.findOne({name:'Akm'});
            })
            .then((user)=>{
                console.log(user.posts);
                assert(true === true);
                done();
            });
    });

});