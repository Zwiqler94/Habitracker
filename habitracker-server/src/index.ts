import { app } from "./app";
import { connect, connection } from 'mongoose';
import { getLogger } from '../config/logger'
import { lookup } from "dns";

const logger = getLogger(module);

try {
    connect('mongodb://localhost/Habitracker', { useNewUrlParser: true })
    const dbConnection = connection;
} catch (err) {
    logger.error(err)
}

app.listen(3000, (err: any) => {
    if (err) logger.error(err)
    return logger.info('Server is listening on port 3000');
});
