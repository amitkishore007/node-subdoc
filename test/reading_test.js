const assert = require('assert');
const User = require('../src/user');

describe('Reading data from users colection', ()=>{

    it('Get all user',(done)=>{
        User.find({})
            .then((users)=>{
                console.log(users);
                assert(true == true);
                done();
            });
    });

    it('Get user Posts', (done) => {
        const user = User.findOne({name:'Akm'})
                         .then((user) => {
                            for (let post of user.posts) {
                                console.log(post.title);
                            }
                            assert(true == true);
                            done();
                        });
    });

});