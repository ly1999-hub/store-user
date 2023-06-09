const {check} = require('express-validator');
var {validationResult} = require('express-validator');

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

let validationLoginByEmail=()=>{
  return [
    check('email', 'email does not Empty').not().isEmpty(),
    check('email', 'Invalid email').isEmail(),
    check('password','password does not Empty').not().isEmpty(),
  ]
}

const CheckValidation=(req,res,next)=>{
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors)
    }else{
      next()
    }
}

let validate={
    validateRegisterCustomer:validateRegisterCustomer,
    validationLoginByEmail:validationLoginByEmail,
    CheckValidation:CheckValidation
}

module.exports=validate