import { ILogger } from './iLogger';

export class Log4NetLogger implements ILogger {
    public logMessage(message: string) {
        console.log(`Log4Net: ${message}`);
    }

    public logError(message: string) {
        console.error(`Log4Net: ${message}`);
    }
}
