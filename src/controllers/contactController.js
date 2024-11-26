const {prisma} = require('../../prisma/prismaClient')

contactViewController= async (req, res) => {
    const contact = await prisma.contacto.findMany();
    res.render('contact', {title:'contact', contact})
}

module.exports = {
    contactViewController
};