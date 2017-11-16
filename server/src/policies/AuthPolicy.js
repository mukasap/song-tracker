const Joi = require('joi')
module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
    }

    const {error, value} = Joi.validate(req.body, schema)

    if(error){
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({error: 'You must provide valid email address'})
          break
        case 'password':
          res.status(400).send({error: 'Pasword must be 6-32 alphanumenric characters'})
          break
      
        default:
          res.status(400).send({error: 'Invalid registration information'})
          break
      }
    }
    next()
  }
}