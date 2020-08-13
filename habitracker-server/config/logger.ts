import { createLogger, transports, format } from 'winston';
const { combine, printf, timestamp } = format;

const transport = {
    console: new transports.Console()
};

const myFormat = printf(({ level, message, timestamp, ...rest }) => {
    return `${timestamp} ${level}: ${message} ${JSON.stringify(rest)}`;
});


const logger = createLogger({
    format: combine(timestamp(),myFormat),
    transports: [
        transport.console
    ]
});

const getLogger = (module: any, metadata = {}) => {
    const filename = module.filename.split('/').slice(-2).join('/');
    return logger.child({
        filename, ...metadata
    });
};

export { getLogger, transport }
