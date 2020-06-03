// import { v4 } from 'https://deno.land/std/uuid/v4.ts'
import { Dog } from '../types.ts'
import { dayOfYear, currentDayOfYear } from 'https://deno.land/std/datetime/mod.ts'

// @desc    call Doggo to start process
// @route   GET /api/v1/whistle
const callDoggo = ( { response }: { response: any } ) => {
    response.body = "Woof! Woof! name Woof! Doggo!"
} 

export { callDoggo } 