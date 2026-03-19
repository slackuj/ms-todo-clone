import {Request, Response, NextFunction} from "express";
import * as tasksService from "../services/tasks";

export const create = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const data = req.body;
        const response = await tasksService.create(data);
        res.status(201).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
};

export const deleteById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        await tasksService.deleteById(String(id));
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

export const updateById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const response = await tasksService.updateById(String(id), data);
        res.status(200).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
};

export const fetchById = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;
        const response = await tasksService.fetchById(String(id));
        res.status(200).json({
            data: response
        });
    } catch (error) {
        next(error);
    }
};

export const fetchAll = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
    const response = await tasksService.fetchAll();
    res.status(200).json({
        data: response
    });
    } catch (error) {
        next(error);
    }
};