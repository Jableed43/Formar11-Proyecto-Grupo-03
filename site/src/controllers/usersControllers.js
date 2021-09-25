const controller = {
    register: (req, res, next) => {
        res.render('users/register');
    },
    login: (req, res, next) => {
        res.render('users/login');
    },
    carrito: (req, res, next) => {
        res.render('users/carrito');
    }
}

module.exports = controller