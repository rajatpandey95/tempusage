const TASK = require("../models/task");
const { asyncWrapper } = require("../middleware/async");

// as we have handles error with custom asyncWrapper
// we did it in Chat app with an npm module
const getAllItems = asyncWrapper(async (req, res) => {
  const data = await TASK.find({});
  res.status(200).json({ data });
});

const getSingleItem = async (req, res) => {
  try {
    // use alias
    const { id: taskId } = req.params;
    const data = await TASK.findOne({ _id: taskId });
    res.status(200).json({ data });
  } catch (err) {
    res.status(404).json({ Error: err });
  }
};

const createTask = async (req, res) => {
  try {
    // as we have asynchronous operation so specify try catch block
    const task = await TASK.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TASK.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(404).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ msg: "Success" });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    // using alias
    const { id: taskID } = req.params;
    const { name: taskName } = req.body;
    const task = await TASK.findOneAndUpdate(
      { _id: taskID },
      {
        name: taskName,
        completed: req.body.completed || false,
      }
    );
    // res.status(200).json({ _id: taskID, name: req.body.name });
    if (!task) {
      res.status(404).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ msg: "Success" });
    }
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};

module.exports = {
  getAllItems,
  getSingleItem,
  createTask,
  updateTask,
  deleteTask,
};
