import { Schema, model } from 'mongoose';



const habitSchema = new Schema({
    habitId: String,
    name: String,
    dateStarted: Date,
    datesCompleted: [Date],
    percentCompleted: Number,
    listId: String
});

export const Habit = model('Habit', habitSchema);