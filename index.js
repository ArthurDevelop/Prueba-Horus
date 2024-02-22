import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schemas/schema.js'
const sequelize = require('./configura/bd.js');
const Usuario1 = require('./typeDefs/01-Usuario.js');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida correctamente con la base de datos.');
    await sequelize.sync({ alter: true }); // Esto sincronizará tus modelos con la base de datos
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers
    
  })
  
  const {url} = await server.listen()
  console.log('server corriendo',url)

}

startApolloServer()

