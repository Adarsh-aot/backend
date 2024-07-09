const { todo } = require("../constant/array");


const getdata = (req , res) =>    {
    const type = req.decode.type
    let admindet = todo.filter((item) => item.type != type)
    res.json(admindet)
}


module.exports = {
    getdata
}