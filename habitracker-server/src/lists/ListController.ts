import { getLogger } from '../../config/logger';
import { HabitList } from './List'
import { v4 as uuid } from 'uuid';

const logger = getLogger(module);

class HabitListController {
    public create = async (req, res) => {
        try {
            logger.info(`creating habit...`, req.body);
            const newHabitList = new HabitList({
                listId: uuid(),
                name: req.body.name,
                percentCompleted: 0
            })
            newHabitList.save();
            res.status(200).json({ message: 'Success' });
        } catch (err) {
            logger.error(err);
            res.status(400);
        }
    }
}

export default new HabitListController()