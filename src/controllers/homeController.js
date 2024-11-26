homeViewController = async (req, res) => {
    res.render('inicio',{title:'Home 🏠'})
};
saludoViewController = (req, res) => {
    res.render('home',{title:'Saludo 👋'})
}
module.exports = {
    homeViewController,
    saludoViewController
};