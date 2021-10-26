module.exports = (req, res, next) => {
    if (req.session.loggedUser !== undefined) {
        next()
    } else {
        res.render('users/guestUser')
    }
}