import {Task, Step} from "../interfaces/tasks";
import mongoose from "mongoose";

export interface ITask extends Omit<Task, 'id'>, mongoose.Document {}
export interface IStep extends Omit<Step, 'id'>, mongoose.Document {}

mongoose.plugin( schema => {
    // sets 'id' = '_id' in response and removes '_id', '__v' from response
    schema.set('toJSON', {
        virtuals: true,
        versionKey: false,
    	transform: (_doc, ret) => {
            delete ret._id;
	    if (ret.dueDate && new Date(ret.dueDate as any).getTime() === 0) {
        	ret.dueDate = null; // dueDate set to null insead of Unix Epoch
    }
            return ret;
        }

        });
});

const stepsSchema = new mongoose.Schema<IStep>({

    title: { type: String, required: true },
    isCompleted: Boolean
});

const taskSchema = new mongoose.Schema<ITask>({

    title: { type: String, required: true },
    dueDate: { type: Date,
        // If the value is null or empty, return undefined to remove it from the DB
        set: (v: any) => (v === null || v === '' || v === 0) ? undefined : v
    },
    isImportant: Boolean,
    isCompleted: Boolean,
    note: String,
    steps: [stepsSchema],
    taskList: String
});

taskSchema.post( /find/, (error: any, doc: any, next: any) => {
    if (!doc || error.name === "CastError") {
        return next(new Error("Task not found"));
    }
    if (error) return next(error);
    next();
});

//taskSchema.pre('findOneAndUpdate', async function() {
  //const docToUpdate = await this.model.findOne(this.getQuery());
  //console.log(docToUpdate); // The document that `findOneAndUpdate()` will modify
 //   console.log('filter: ', this.getFilter());
  //  console.log('updates: ', this.getUpdate());
//});

export const TaskModel = mongoose.model<ITask>("Task", taskSchema);
