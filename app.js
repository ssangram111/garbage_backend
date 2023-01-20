import express from 'express'
import connectDB from "./db/connectDb.js";

import cors from 'cors'
import bodyParser from 'body-parser';

const app = express()
const port = process.env.PORT || '8000'
const DATABASE_URL = process.env.DATABASE_URL ||  "mongodb://0.0.0.0:27017"



app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.options("*",cors());

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json())

// Load Routes
import user from './router/user.js'
app.use("/api", user)

import complain from'./router/complains.js'
app.use("/api", complain)




app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
 })

