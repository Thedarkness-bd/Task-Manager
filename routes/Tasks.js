const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTaskById).patch(updateTask).delete(deleteTask);


module.exports = router;
