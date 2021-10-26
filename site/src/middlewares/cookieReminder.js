const registeredUsers = require('../data/users.json')

module.exports = (req, res, next) => {
    if (req.cookies.recordarme !== undefined && req.session.loggedUser === undefined) {
        req.session.loggedUser = registeredUsers.find(usuario => user.email === req.cookies.recordarme)
    }
    next()
}