import { app } from "./app";
import { connect, connection } from 'mongoose';
import { getLogger } from '../utils/logger'


const logger = getLogger(module);

async function monogoSetup(): Promise<void> {
    await connect('mongodb://localhost:27017/Habitracker', { useNewUrlParser: true })
    const dbConnection = connection;
}

try {
    monogoSetup();
} catch (err) {
    logger.error(err)
}

app.listen(3000, (err: any) => {
    if (err) logger.error(err)
    return logger.info('Server is listening on port 3000');
});
