import { Schema, model } from 'mongoose';

const habitListSchema = new Schema({
    listId: String,
    name: String,
    percentCompleted: Number
})

export const HabitList = model('Lists', habitListSchema)