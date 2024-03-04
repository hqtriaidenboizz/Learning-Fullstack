import mongoose from "mongoose";

const TaskShema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    description: {
        type: String, required: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

})

export const TaskModel = mongoose.model('Task', TaskShema)

// task Actions

export const getTasks = (userId: string) => TaskModel.findOne({ userId });

export const getTaskById = (id: string) => TaskModel.findById(id)

export const createTask = (values: Record<string, any>) => new TaskModel(values).save().then((task) => task.toObject())

export const deleteTaskById = (id: string) => TaskModel.findByIdAndDelete(id)

export const updateTaskById = (id: string, values: Record<string, any>) => TaskModel.findByIdAndUpdate(id, values)
