export interface Step {
    id: number;
    title: string;
    isCompleted?: boolean;
}

export interface Task {
    id: string;
    title: string;
    dueDate?: Date;
    isImportant?: boolean;
    isCompleted?: boolean;
    note?: string;
    steps?: Step[];
    taskList?: string;
}