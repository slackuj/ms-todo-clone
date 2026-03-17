import {Task, Steps} from "../interfaces/tasks";
import mongoose from "mongoose";

export interface ITask extends Omit<Task, 'id'>, mongoose.Document {}
export interface ISteps extends Omit<Steps, 'id'>, mongoose.Document {}

mongoose.plugin( schema => {
    // sets 'id' = '_id' in response and removes '_id', '__v' from response
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
        transform: (_doc, ret) => {
            delete ret._id;
            return ret;
        }
    });
});

const stepsSchema = new mongoose.Schema<ISteps>({

    title: { type: String, required: true },
    isCompleted: Boolean
});

const taskSchema = new mongoose.Schema<ITask>({

    title: { type: String, required: true },
    dueDate: Date,
    reminder: Date,
    isImportant: Boolean,
    isCompleted: Boolean,
    note: String,
    steps: [stepsSchema],
    taskList: String
});

export const TaskModel = mongoose.model<ITask>("Task", taskSchema);