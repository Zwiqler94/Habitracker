import { getLogger } from '../../config/logger';
import { Habit } from './Habit'
import { v4 as uuid } from 'uuid';

const logger = getLogger(module);

class HabitController {
    public create = async (req, res) => {
        try {
            logger.info(`creating habit...`, req.body);
            const newHabit = new Habit({
                habitId: uuid(),
                name: req.body.name,
                datesCompleted: req.body.datesCompleted,
                dateStarted: req.body.dateStarted,
                percentCompleted: req.body.percentageCompleted,
                listId: req.body.listId
            });
            newHabit.save();
            res.status(200).json({ message: 'Success' });
        } catch (err) {
            logger.error(err);
            res.status(400).json({ message: err });
        }
    }

    public addCompletion = async (req, res) => {
        try {
            logger.info(`adding completion...`, req.params.id);
            const timeAndDate = new Date().toISOString();
            let habit = await Habit.findOneAndUpdate({ habitId: req.params.id }, { $addToSet: { datesCompleted: timeAndDate } }, { new: true });
            res.status(200).json({ message: habit });
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    // public lookupHabit = async (req, res) => {
    //     try {
    //         logger.info(`looking up habit...`, req.body);

    //         logger.info(habit)
    //     } catch (err) {

    //     }
    // }

}

export default new HabitController()