const {Song} = require('../models')


module.exports = {
  async index (req, res) {
    try {
      
    } catch (error) {
      res.status(500).send({
        error: 'An error occured trying to login'})
    } 
  }
}