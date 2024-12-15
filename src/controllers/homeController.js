homeViewController = async (req, res) => {
    if(req.session.visitas){
        req.session.visitas++
    }else{
        req.session.visitas = 1
    }
    res.render('inicio',{title:'Home 🏠', visitas: req.session.visitas});
};
saludoViewController = (req, res) => {
    res.render('home',{title:'Saludo 👋'});
};

logoutController = (req, res) => {
    req.session.destroy();
    res.redirect('/')
};
module.exports = {
    homeViewController,
    saludoViewController,
    logoutController
};