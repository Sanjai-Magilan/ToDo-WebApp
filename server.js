const express = require("express")
const app = express()
const port = 5502;
app.use(express.json());

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

app.get('/todo/:sid',(req,response)=>{
        const tid=req.params.sid
        const todoo = todos.find(todos => todos.id==tid)
        response.status(200).json(todoo)
        //console.log(req.params)
})

app.get('/todos',(req,res)=>{
    res.status(200).json(todos)
})

app.post('/todo',(req,res)=>{
    todos = [...todos,req.body]
    res.status(200).send("Added successfuly")
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

