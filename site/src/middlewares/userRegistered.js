const users = require('../data/users.json');

module.exports = (req, res, next) => {
    
    const user = users.find(user => user.name.toLowerCase().trim() === req.query.name.toLowerCase().trim())

    if(user) {
        next()
    } else {
        res.redirect('users/login')
    }
}

