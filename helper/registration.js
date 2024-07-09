const { todo } = require('../constant/array')
const jwt = require('jsonwebtoken');
const {v4 : uuidv4} = require('uuid')
function extractNumbersFromUUID(uuid) {
    return uuid.replace(/\D/g, '');
  }

const login = (req , res) => {
    const {email , password} = req.body
    const index = todo.findIndex((item) => item.email == email && item.password == password)
    if( index == -1 ){
        res.json({status : 'failed'})
    }else{
        const id = todo[index].id
        const type = todo[index].type
        var token = jwt.sign({ id  , email}, 'shhhhh');
        res.json({type , token})
    }
}

const register = (req , res) => {
    const {email , password} = req.body
    const index = todo.findIndex((item) => item.email == email && item.password == password)
    if( index == -1 ){
        const id = extractNumbersFromUUID(uuidv4())
        todo.push({id , email , password})
        var token = jwt.sign({ id  , email}, 'shhhhh');
        res.json({token})
    }else{
        res.json({status : 'failed'})
    }
}




module.exports = {
    login ,
    register
}