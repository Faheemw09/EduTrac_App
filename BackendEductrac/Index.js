const express=require("express")
const cors=require("cors")
const { Connection } = require("./db")

const app=express()
app.use(cors())
app.use(express.json())
require("dotenv").config()

app.listen(5050,async()=>{
    console.log("server is runing on port 5050")
    try {
        await Connection
        console.log("server is connected to db")
    } catch (error) {
        console.log('server is not connected')
    }
})

module.export=app