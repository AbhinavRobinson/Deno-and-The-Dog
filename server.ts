import { Application } from 'https://deno.land/x/oak/mod.ts'


const port: number = 5000

import router from './router.ts'

const app: any = new Application()
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`The Server is Running on Port ${port}`)

await app.listen({ port })