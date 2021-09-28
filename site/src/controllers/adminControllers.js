let controller = {
    carga: (req, res, next) => {
        res.render('admin/create');
    },
    edit: (req, res, next) => {
        res.render('admin/edit');
    },
    admin: (req, res, next) => {
        res.render('admin/admin');
    },
}

module.exports = controller