import express from 'express'
import { PORT } from './config/env.js'
import userRouter from './routes/user.routes.js'
import authrouter from './routes/auth.routes.js'
import connect from './mongodb/mongodb.js'
import errorMiddleware from './middlewares/error.middlewares.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'



const app = express()



//some middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())



//Routes
app.use('/api/v1/auth', authrouter)
app.use('/api/v1/users', userRouter)


//error handles
app.use(errorMiddleware)


//Connection and starting
app.get('/', (req, res) => {
    res.send("Welcome to the VIRA-KIOSK: The smart Voice assisstant");
})


app.listen(PORT, async () => {
    console.log(`Kiosk Server is running on http://localhost:${PORT}`)
    await connect()
})
export default app;
