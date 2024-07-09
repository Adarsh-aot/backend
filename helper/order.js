let { order  } = require("../constant/array");


const addorder  = (req , res) => {
    const {name , by} = req.body
    const id = 59895 
    const post = req.decode.id 
    order.push({id , name , by , post})
    res.json(order)
}


module.exports = {
    addorder
}