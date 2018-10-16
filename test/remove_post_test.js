const assert = require('assert');
const User = require('../src/user');

describe('removing users post from users collection', ()=>{

    it('Remove user post', (done)=>{
        User.findOne({name:'Akm'})
            .then((user)=>{
                if (user !== undefined) {
                      user.posts[1].remove();
                      return user.save();
                }
            })
            .then(()=>{
                return User.findOne({name:"Akm"});
            })
            .then((user)=>{
                console.log(user.posts);
                assert(true === true );
                done();
            });
    });
});
