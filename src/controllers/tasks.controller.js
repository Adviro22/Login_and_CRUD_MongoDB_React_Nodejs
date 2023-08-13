import Task from '../models/task.model.js'

export const getTasks = async (req, res) =>{
    const tasks = await Task.find({
        user: req.user.id
    })
    res.json(tasks)
}

export const createtasks = async (req, res) =>{
    const {title, description, date} = req.body
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })
    const saveTask = await newTask.save();
    res.send(saveTask)
}

export const getTask = async (req, res) =>{
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json("No encontrado")
    res.json(task)
}

export const updateTasks = async (req, res) =>{
    const task = await Task.findByIdAndUpdate(req.params.id);
    if (!task) return res.status(404).json("No no encontrado")
    res.json(task)
}

export const deleTasks = async (req, res) =>{
    const task = await Task.findOneAndDelete(req.params.id, req.body, {new: true});
    if (!task) return res.status(404).json("No encontrado")
    res.json({mesaage: "Su tarea ha sido eliminada"})
}