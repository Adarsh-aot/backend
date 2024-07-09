let { order  } = require("../constant/array");


const addorder  = (req , res) => {
    const {name , by} = req.body
    const id = 59895 
    const post = req.decode.id 
    order.push({id , name , by , post})
    res.json(order)
}

const getorder = (req , res) => {
    const id = req.decode.id
    const todo = order.filter((item) => item.post == id)
    res.json(todo)
}


module.exports = {
    addorder ,
    getorder
}