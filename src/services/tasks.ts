import {TaskModel} from "../models/tasks";
import {Task} from "../interfaces/tasks";

type TaskCreateData = Omit<Task, 'id'>;
export const create = async (data: TaskCreateData) => {
    return await TaskModel.create(data);
};

export const deleteById = async (id: string) => {
    await TaskModel.findByIdAndDelete(id).exec();
};

type TaskUpdateData = Partial<TaskCreateData>;
export const updateById = async ( id: string, data: TaskUpdateData ) => {
    return await TaskModel.findByIdAndUpdate(
        id,
        data,
        { returnDocument: "after"}
    ).exec();
};

export const fetchById = async (id: string) => {
    return await TaskModel.findById(id).exec();
}

export const fetchAll = async () => {
    return await TaskModel.find().exec();
}