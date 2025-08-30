const express = require("express")
const app = express()
const port = 5502;

let todos = [
    {
        id : 1,
        name:"water plants",
        priority: "if won't mom will kill u"
    },
    {
        id:2,
        name:"clean house",
        priority:"same a last"
    },
    {
        id:3,
        name:"study for exam",
        priority:"optional"
    }
]

app.get('/todo/:id',(req,response)=>{
        const tid=req.params.id
        const todo = todos.find((id)=>todos.id==tid)
        response.status(200).json(todo)
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

