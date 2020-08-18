import { getLogger } from '../../config/logger';
import { Habit, IHabit } from './Habit'
import { v4 as uuid } from 'uuid';

const logger = getLogger(module);

class HabitController {
    public create = async (req, res) => {
        try {
            logger.debug(`creating habit... ${req.body}`);
            const newHabit = new Habit({
                habitId: uuid(),
                name: req.body.name,
                datesCompleted: req.body.datesCompleted,
                dateStarted: req.body.dateStarted,
                percentCompleted: req.body.percentageCompleted,
                listId: req.body.listId
            });
            newHabit.save();
            res.status(201).json(newHabit.toJSON());
        } catch (err) {
            logger.error(err);
            res.status(400).json({ message: err });
        }
    }

    public addCompletion = async (req, res) => {
        try {
            logger.debug(`adding completion... ${req.params.id}`);
            const timeAndDate = new Date().toISOString();
            let habit: IHabit = await Habit.findOneAndUpdate({ habitId: req.params.id }, { $addToSet: { datesCompleted: timeAndDate } }, { new: true });
            res.status(201).json(habit.datesCompleted);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    public calculatePercentCompleted = async (req, res) => {
        try {
            logger.debug(`calculating percentage of days habit was completed`);
            const habit: IHabit = await Habit.findOne({ habitId: req.params.id });
            const numberOfDaysSinceStart = new Date().getTime() - new Date(habit.dateStarted).getTime();
            const daysCompleted = habit.datesCompleted.length  - Math.round(numberOfDaysSinceStart/(60*60*24*1000));
            const percentageOfDaysCompleted = Math.round((daysCompleted / habit.datesCompleted.length) * 100);
            res.status(201).json({ percentageOfDaysCompleted : percentageOfDaysCompleted });
        } catch (err) {
            logger.error(err);
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