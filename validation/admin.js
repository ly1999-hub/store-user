const {check} = require('express-validator');

let validateRegisterCustomer = ()=> {
  return [ 
    check('email', 'email does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('username', 'username does not Empty').not().isEmpty(),
    check('address', 'Invalid phone').not().isEmpty(),
    check('password','password does not Empty').not().isEmpty(),
    check('password','min length password 6').isLength({min:6})
  ]; 
}


let validate={
    validateRegisterCustomer:validateRegisterCustomer
}

module.exports=validate