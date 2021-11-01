module.exports = (req,res,next) =>{
    if(req.cookies.tacopadoCookie){
        req.session.userLogin = req.cookies.tacopadoCookie
    }
    next()
}


