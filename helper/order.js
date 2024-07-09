let { order  } = require("../constant/array");
const {v4 : uuidv4} = require('uuid')




function extractNumbersFromUUID(uuid) {
    return uuid.replace(/\D/g, '');
  }



const addorder  = (req , res) => {
    const {name , by} = req.body
    const id = extractNumbersFromUUID(uuidv4());
    const post = req.decode.id 
    order.push({id , name , by , post})
    res.json(order)
}

const getorder = (req , res) => {
    const id = req.decode.id
    const todo = order.filter((item) => item.post == id)
    res.json(todo)
}


const cancelorder = (req , res) => {
    const id = req.params.id
    order = order.filter((item) => item.id != id)
    res.json(order)
}

module.exports = {
    addorder ,
    getorder ,
    cancelorder
}