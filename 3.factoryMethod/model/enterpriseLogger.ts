import { ILogger } from './iLogger';

export class EnterpriseLogger implements ILogger {
    public logMessage(message: string) {
        console.log(`Enterprise: ${message}`);
    }

    public logError(message: string) {
        console.error(`Enterprise: ${message}`);
    }
}
