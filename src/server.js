import Fastify from 'fastify'
import  path  from 'node:path'
import FastifyVite from '@fastify/vite'
import AutoLoad from '@fastify/autoload'

const server = Fastify({logger:true})
var filename = path.join(import.meta.dirname, '..', 'vite.config.js')
await server.register(FastifyVite, {
    root: filename, // where to look for vite.config.js
    dev: process.argv.includes('--dev'),
    spa: true,
    
})

// First be sure to know the basis of routing before starting.
// routes/root.js file indicates the root of the App "localhost:8080/"
// routes/user/user.js indicates "localhost:8080/user" route
// What matters is the folder name not the file.
await server.register(AutoLoad, {
    dir: path.join(import.meta.dirname, 'routes'),
    // options: Object.assign({prefix: "/api/v1/"}, opts)
})
console.log('Tudo Carregado')




await server.vite.ready()
await server.listen({ port: 8080 })