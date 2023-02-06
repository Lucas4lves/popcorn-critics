import {userSchema} from '../types/userSchema'
import { users } from '../data/users'

export let zodUsers = users.map(user=>{
  return userSchema.parse(user)
})

export function getUserById(id : number)
{
    let result = zodUsers.filter(user => user.id == id)[0];
    return result; 
}

