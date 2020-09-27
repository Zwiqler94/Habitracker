import { Schema, model, Model, Document } from 'mongoose';

export interface IList {
    listId: string,
    name: string,
    percentCompleted: number
};

const habitListSchema = new Schema({
    listId: String,
    name: String,
    percentCompleted: Number
});

export type IListDocument = IList & Document;
export const HabitList: Model<IListDocument> = model<IListDocument>('Lists', habitListSchema);