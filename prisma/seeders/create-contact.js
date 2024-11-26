const {prisma} = require('../prismaClient.js')

const seedContact = async () => {
    try{
        console.log('Iniciando carga de contacto...');
        const contacts =[
            {firstname: 'Jose', lastname: 'Perez', email: 'joseperez@example.com', phone: '233443634'},
            {firstname: 'Julian', lastname: 'Domingez', email: 'juliandomingez@example.com', phone: '5435735523'},
            {firstname: 'Mariano', lastname: 'Petri', email: 'marianopetri@example.com', phone: '34537423'},
            {firstname: 'Rodrigo', lastname: 'DeVera', email: 'rodrigodevera@example.com', phone: '132364537'},
        ]
        for(const contact of contacts){
            console.log(`Insertando al contacto ${contact.email}`)
            await prisma.contacto.create({data:contact})
        }
        console.log('Contactos cargados correctamente');
    }catch (error){
        console.error('Error al ejecutrar el seeder:', error);
    }
}
(async () => {
    await seedContact();
})();
