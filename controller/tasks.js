const getAllTasks = (req, res) => {
  res.send("check items");
};
const createTask = (req, res) => {
  res.json(req.body);
};
const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update item");
};
const deleteTask = (req, res) => {
  res.send("delete item");
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
