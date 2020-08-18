import { Schema, model, Model, Document } from 'mongoose';

export interface IHabit {
    habitId: string,
    name: string,
    dateStarted: string,
    datesCompleted: string[],
    percentCompleted: number,
    listId: string
}


const HabitSchema = new Schema({
    habitId: String,
    name: String,
    dateStarted: String,
    datesCompleted: [String],
    percentCompleted: Number,
    listId: String
});

export type IHabitDocument = IHabit & Document;
export const Habit: Model<IHabitDocument> = model<IHabitDocument>('Habit', HabitSchema);