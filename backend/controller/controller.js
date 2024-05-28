const TodoModel = require("../models/model");

const getToDos = async (req, res) => {
  try {
    const toDos = await TodoModel.find();
    res.send(toDos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await TodoModel.findById(id);
    if (!toDo) {
      return res.status(404).send({ message: 'ToDo not found' });
    }
    res.send(toDo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createToDo = async (req, res) => {
  try {
    const { toDo } = req.body;
    const newToDo = await TodoModel.create({ toDo });
    console.log("Saved Successfully...");
    res.status(201).send(newToDo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const { toDo } = req.body;
    const updatedToDo = await TodoModel.findByIdAndUpdate(id, { toDo }, { new: true });
    if (!updatedToDo) {
      return res.status(404).send({ message: 'ToDo not found' });
    }
    res.send({ message: 'Updated Successfully', updatedToDo });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedToDo = await TodoModel.findByIdAndDelete(id);
    if (!deletedToDo) {
      return res.status(404).send({ message: 'ToDo not found' });
    }
    res.send({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getToDos,
  getToDo,
  createToDo,
  updateToDo,
  deleteToDo,
};
