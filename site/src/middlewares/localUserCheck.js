module.exports = (req,res,next)=>{
    if(req.session.userLogin){
        res.locals.user = req.session.userLogin;
    }
    next()
}


// module.exports = (req,res,next) => {
//     if(req.session.userLogin){
//         res.locals.userLogin = req.session.userLogin
//     }
//     next()

// }