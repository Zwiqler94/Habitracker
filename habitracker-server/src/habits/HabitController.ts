import { getLogger } from '../../config/logger';
import { Habit } from './Habit'
import { v5 as uuid } from 'uuid';

const logger = getLogger(module);

class HabitController {
    public create = async (req, res) => {
        try {
            logger.info(`creating habit...`, req.body);
            console.log(req.body)
            const newHabit = new Habit({
                habitId: uuid('gasoline', uuid.URL),
                name: req.body.name,
                dateCompleted: req.body.datesCompleted,
                percentCompleted: req.body.percentageCompleted
            })
            newHabit.save()
            res.status(200).json({ message: 'Success' })
        } catch (err) {
            logger.error(err)
            res.status(400)
        }
    }
}

export default new HabitController()