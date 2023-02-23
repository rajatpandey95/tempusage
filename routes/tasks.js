const express = require("express");
const {
  getAllItems,
  getSingleItem,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.js");

const router = express.Router();

// as it not good practice to specify all callbacks for HTTP methods(verb) here so we use controllersm for it
router.route("/").get(getAllItems).post(createTask);
router.route("/:id").get(getSingleItem).patch(updateTask).delete(deleteTask);

module.exports = { router };

//app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')       - create a new task
// app.get('/api/v1/tasks/:id')    - get single task
// app.patch('/api/v1/tasks/:id')  - update task
// app.delete('/api/v1/tasks/:id');- delete task

// router.route("/").get((req, res) => {
//   res.send("all items");
// });
