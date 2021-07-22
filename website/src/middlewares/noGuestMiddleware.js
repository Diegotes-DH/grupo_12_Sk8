function noGuestMiddleware (req, res, next){
    if(!req.session.userLogged){
        return res.redirect('/usuario/ingresa');
    }
    next();
}
module.exports = noGuestMiddleware;