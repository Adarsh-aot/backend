const { todo } = require("../constant/array");


const getdata = (req , res) =>    {
    const id = req.decode.id
    const type = todo[id].type
    let admindet = todo.filter((item) => item.type == type)
    res.json(admindet)
}


module.exports = {
    getdata
}