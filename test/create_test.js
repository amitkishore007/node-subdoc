const assert  = require('assert');
const User = require('../src/user');
describe('Creatting user with nested posts', ()=>{
    it('user required validation', (done)=>{
        const user = new User({age: 23, posts:[{title:'this is a basic post title'}]});
        user.save()
            .then(()=>{
                
            })
            .catch((validationResult)=>{
                const { message } = validationResult.errors.name;
                console.log(message);
                assert(message == 'Username is required');
                done();
            });
    });

    it('user min characters 2 validation', (done) => {
        const user = new User({
            name:'Al',
            age: 23,
            posts: [{
                title: 'this is a basic post title'
            }]
        });
        user.save()
            .then(() => {

            })
            .catch((validationResult) => {
                const { message  } = validationResult.errors.name;
                console.log(message);
                assert(message == 'Username must be 3 charasters long');
                done();
            });
    });
});