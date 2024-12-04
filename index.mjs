import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res)=>{
    const message=`Hello World, I am POd ${os.hostname()} : Version 1.2.0   `
    res.send(message)
})

app.listen(PORT, ()=>{
    console.log(`Web server is listing at port ${PORT}`)
    console.log(os.hostname())
}) 