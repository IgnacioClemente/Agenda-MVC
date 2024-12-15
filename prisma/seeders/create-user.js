const {prisma} = require('../prismaClient.js')
const bcrypt = require('bcryptjs')

const seedUser= async () => {
    try{
        console.log('Iniciando carga de admin...');
        const user_password = await bcrypt.hash('admin1234', 10);
        const user = {
            firstname: 'admin', 
            lastname: 'systema', 
            email: 'admin@contact.com', 
            password: user_password
        }
        
        const create_user = await prisma.user.create({
            data: user
        })

        console.log('Usuario admin creado');

    }catch (error){
        console.error('Error al ejecutar el seeder:', error);
    }
}
(async () => {
    await seedUser();
})();