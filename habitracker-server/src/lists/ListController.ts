import { getLogger } from '../../utils/logger';
import { HabitList, IList } from '../../models/List'
import { v4 as uuid } from 'uuid';


const logger = getLogger(module);

class HabitListController {
    public create = async (req, res) => {
        try {
            logger.info(`HabiListControler: creating habit list... ${JSON.stringify(req.body)}`);
            const newHabitList = new HabitList({
                listId: req.body.id = uuid(),
                name: req.body.name,
                percentCompleted: 0
            })
            newHabitList.save();
            logger.info(`HabiListControler: created habit list... ${JSON.stringify(req.body)}`);
            res.status(200).json({ message: req.body });
        } catch (err) {
            logger.error(err);
            res.status(400);
        }
    }

    public getAllLists = async (req, res) => {
        try {
            logger.info(`HabiListControler: retrieving habit lists... ${JSON.stringify(req.body)}`);
            const lists: IList[] = await HabitList.find({});
            logger.info(`HabiListControler: retrieved habit lists... ${JSON.stringify(req.body)}`);
            res.status(200).json({ lists });
        } catch (err) {
            logger.error(err);
            res.status(400);
        }
    }

    public getList = async (req, res) => {
        try {
            logger.info(`HabiListControler: retrieving habit lists... ${JSON.stringify(req.body)}`);
            const list: IList = await HabitList.findOne({listId: req.params.id});
            logger.info(`HabiListControler: retrieved habit lists... ${JSON.stringify(req.body)}`);
            res.status(200).json({ list });
        } catch (err) {
            logger.error(err);
            res.status(400);
        }
    }

}

export default new HabitListController()