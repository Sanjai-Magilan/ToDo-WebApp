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
        //const todoo = todos.find(todos => todos.id==tid)
        response.status(200).json(todos.find(todos => todos.id==tid))
        //console.log(req.params)
})

app.get('/todos',(req,res)=>{
    res.status(200).json(todos)
})

app.post('/todo',(req,res)=>{
    todos = [...todos,req.body]
    res.status(200).send("Added successfuly")
})

app.put('/todo/update', (req, res) => {
    const { id, name, priority } = req.body;

    const todo = todos.find(t => t.id == id);
    if (!todo) {
        return res.status(404).send("Todo not found");
    }

    todo.name = name;
    todo.priority = priority;

    res.status(200).send( "Updated successfully" );
});

app.delete('/todo/delete',(req,res)=>{
    const {id} = req.body
    const exist = todos.some(todo => todo.id==id)
    if(!exist){
        res.status(404).send("task not found")
    }
    todos=todos.filter(t => t.id != id)
    res.status(200).send("Deleted successfully")
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

