import { body } from 'express-validator';

export const HabitReqSchema = [
    body('habitId')
        .isUUID(),
    body('name')
        .isString()
        .isLength({ min: 3 }),
    body('dateStarted')
        .isISO8601(),
    body('datesCompleted')
        .isArray(),
    body('percentCompleted')
        .isNumeric(),
    body('listId')
        .isUUID()
]; 