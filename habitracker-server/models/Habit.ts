import { Schema, model, Model, Document } from 'mongoose';

export interface IHabit {
    habitId: string,
    name: string,
    dateStarted: string,
    datesCompleted: string[],
    percentCompleted: number,
    listId: string
};


const HabitSchema = new Schema({
    habitId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dateStarted: {
        type: String,
        required: true
    },
    datesCompleted: {
        type: [String],
        required: true
    },
    percentCompleted: {
        type: Number,
        required: true
    },
    listId: {
        type: String,
        required: true
    }
});

export type IHabitDocument = IHabit & Document;
export const Habit: Model<IHabitDocument> = model<IHabitDocument>('Habit', HabitSchema);