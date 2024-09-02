import fastify from "fastify";
import {FastifyRequest, FastifyReply} from 'fastify';
import {z} from 'zod'

const app = fastify();


app.listen({
    port:3030,
}).then(()=>{
    console.log('HTTP server is running on http://localhost:3030')
})