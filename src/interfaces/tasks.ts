export interface Steps {
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
    steps?: Steps[];
    taskList?: string;
}