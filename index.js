const jsonServer = require('json-server')
const RSserver = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')

const PORT = 3000 || process.env.PORT

RSserver.use(middleware)
RSserver.use(route)
RSserver.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})