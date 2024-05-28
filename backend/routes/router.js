const express = require("express");
const { getToDos, createToDo, updateToDo, getToDo, deleteToDo } = require("../controller/controller");

const router = express.Router();

router.get("/get", getToDos);
router.get("/get/:id", getToDo)
router.post("/create", createToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports = router;
