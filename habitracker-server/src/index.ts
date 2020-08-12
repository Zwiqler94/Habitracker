import { app } from "./app";
import { connect, connection } from 'mongoose';
import { getLogger } from '../config/logger'

const logger = getLogger(module);

connect('mongodb://localhost/Habitracker', { useNewUrlParser: true })
const dbConnection = connection;

app.listen(3000, (err: any) => {
    if(err) logger.error(err)
    return logger.info('Server is listening on port 3000');
});
