import { getLogger } from '../../utils/logger';
import { Habit, IHabit } from '../../models/Habit';
import { v4 as uuid } from 'uuid';

const logger = getLogger(module);

class HabitController {
    public create = async (req, res) => {
        try {
            logger.debug(`HabitController: creating habit... ${req.body}`);
            const newHabit = await new Habit({
                habitId: uuid(),
                name: req.body.name,
                datesCompleted: req.body.datesCompleted,
                dateStarted: req.body.dateStarted,
                percentCompleted: req.body.percentCompleted,
                listId: req.body.listId
            });
            newHabit.save();
            logger.debug(`HabitController: created habit... ${JSON.stringify(req.body)}`);
            res.status(201).json(newHabit.toJSON());
        } catch (err) {
            logger.error(err);
            res.status(400).json({ message: err });
        }
    }

    public addCompletion = async (req, res) => {
        try {
            logger.debug(`HabitController: adding completion... ${JSON.stringify(req.params.id)}`);
            const timeAndDate = new Date().toISOString();
            let habit: IHabit = await Habit.findOneAndUpdate({ habitId: req.params.id }, { $addToSet: { datesCompleted: timeAndDate } }, { new: true });
            logger.debug(`HabitController: added completion... ${req.params.id}`);
            res.status(201).json(habit.datesCompleted);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }

    public calculatePercentCompleted = async (req, res) => {
        try {
            logger.debug(`HabitController: calculating percentage of days habit was completed`);
            const habit: IHabit = await Habit.findOne({ habitId: req.params.id });
            const numberOfDaysSinceStart = new Date().getTime() - new Date(habit.dateStarted).getTime();
            const daysCompleted = habit.datesCompleted.length  - Math.round(numberOfDaysSinceStart/(60*60*24*1000));
            const percentageOfDaysCompleted = Math.round((daysCompleted / habit.datesCompleted.length) * 100);
            res.status(200).json({ percentageOfDaysCompleted : percentageOfDaysCompleted });
        } catch (err) {
            logger.error(err);
            res.status(400).json({ message: err });
        }

    }

    public findHabitsByListId = async (req, res) => {
        try {
            logger.debug(`HabitController: finding all habits on list ${JSON.stringify(req.query.listId)}`);
            let habits: IHabit[] = await Habit.find({ listId: req.query.listId });
            logger.debug(`HabitController: found all habits on list ${JSON.stringify(req.query.listId)}`);
            res.status(201).json(habits);
        } catch (err) {
            res.status(400).json({ message: err });
        }
    }
    
}

export default new HabitController();