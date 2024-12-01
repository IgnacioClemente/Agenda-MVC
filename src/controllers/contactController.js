const {prisma} = require('../../prisma/prismaClient')

contactListViewController = async (req, res) => {
    const contacts = await prisma.contacto.findMany();
    res.render('contact/list', {title:'contacts', contacts})
}

contactViewController =async(req, res) => {
    try {
        const id = Number(req.params.id);
        const contact = await prisma.contacto.findFirstOrThrow({where:{id}})
        res.render('contact/contact', {title:`${contact.firstname} ${contact.lastname}`,contact,error:null})

    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos encontrar el contacto"})
    }
   
}

module.exports = {
    contactListViewController,
    contactViewController
};