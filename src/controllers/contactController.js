const {prisma} = require('../../prisma/prismaClient');

contactListViewController = async (req, res) => {
    const contacts = await prisma.contacto.findMany({where:{
        deletedAt: null
    }});
    res.render('contact/contacts', {title:'contacts', contacts});
};

contactViewController = async(req, res) => {
    try {
        const id = Number(req.params.id);
        const contact = await prisma.contacto.findFirstOrThrow({where:{id}});
        res.render('contact/contact', {contact,error:null});
    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos encontrar el contacto"});
    };
};

deleteContactController = async (req,res) => {
    try {
        const id = Number(req.params.id)

        await prisma.contacto.update({
            where: {id},
            data: {
                deletedAt: new Date()
            }
        })
        res.redirect('/contact')
    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos borrar el contacto"});
    };
};

formContactViewController = async (req,res) => {
    res.render('contact/create', {title:'Create contact'});
};

createContactController = async(req, res) => {
    try {
        const data = req.body;
        const new_contact = await prisma.contacto.create({data});
        res.redirect('/contact');
    } catch (error) {
        res.render('contact/contact', {title:`ERROR`, error:"No pudimos crear el contacto"});
    };
};

module.exports = {
    contactListViewController,
    contactViewController,
    deleteContactController,
    formContactViewController,
    createContactController
};