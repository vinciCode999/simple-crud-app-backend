import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/product.routes.js'

dotenv.config()

const app = express()
const MongoURI = process.env.MongoURI;
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/products', router)

app.get('/', (req, res)=>{
  res.send(`this is the CRUD App homepage!`)
})

mongoose.connect(MongoURI).then(()=>{
  console.log(`database connected!`)
  app.listen(PORT,()=>{
    console.log(`server running @ port ${PORT}`)
  })
}).catch(error=>{
  console.log("database error: ",error)
})
