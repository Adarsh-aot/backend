let { todo } = require("../constant/array");

const getdata = (req, res) => {
    // Ensure req.decode and req.decode.id are defined
    if (!req.decode || !req.decode.id) {
        return res.status(400).json({ error: 'Invalid request: ID not found' });
    }

    const id = req.decode.id;

    // Ensure the ID exists in the todo array
    

    // const type = todo.findIndex((item) => item.id == id);
    let admindet = todo.filter((item) => item.type != 'admin');
    res.json(admindet);
}

const deletedata = (req, res) => {
    const id = req.params.id;
    console.log(id)
    // Ensure the ID exists in the todo array
    if (!todo.some((item) => item.id == id)) {
        return res.status(404).json({ error: 'Item not found' });
    }

    todo = todo.filter((item) => item.id != id);
    res.json(todo);
}

module.exports = {
    getdata,
    deletedata
}