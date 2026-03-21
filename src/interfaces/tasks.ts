export interface Step {
    id: string;
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