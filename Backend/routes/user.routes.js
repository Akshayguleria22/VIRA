import { Router } from 'express'
import { getAllUsers, getUser } from '../controllers/user.controller.js'
import {authorize} from '../middlewares/auth.middlewares.js'

const userRouter=new Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:id', authorize, getUser)
export default userRouter
