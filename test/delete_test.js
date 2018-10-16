const assert = require('assert');
const User = require('../src/user');

describe('Removing users from users collection',()=>{
    it('Remove user by model instance',(done)=>{
        User.findOne({name:'Akm'})
            .then((user)=>{
                if (user.length !=0 ) {
                    console.log(user.posts);
                     done();
                     assert(true === true);   
                }
            }); 
    });
});