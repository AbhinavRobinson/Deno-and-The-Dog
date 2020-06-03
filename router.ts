import { Router } from 'https://deno.land/x/oak/router.ts'
import { callDoggo } from './controllers/thebestdoggo.ts'

const router = new Router()

router.get('/api/v1/whistle', callDoggo)

export default router