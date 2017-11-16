const AuthPolicy = require('./policies/AuthPolicy')
const AuthController = require('./controllers/Authcontroller')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  app.post('/register', AuthPolicy.register, AuthController.register)
  app.post('/login', AuthController.login)
  // songs
  app.get('/songs', SongsController.index)
}
