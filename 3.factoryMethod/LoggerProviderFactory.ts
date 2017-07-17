import { EnterpriseLogger } from './model/enterpriseLogger';
import { Log4NetLogger } from './model/log4netLogger';
import { LoggingProvider } from './model/loggingProvider';

export class LoggerProviderFactory {
    public static GetLoggingProvider(loggingProvider: LoggingProvider) {
        switch (loggingProvider) {
            case LoggingProvider.EnterpriseLogger:
                return new EnterpriseLogger();
            case LoggingProvider.Log4NetLogger:
                return new Log4NetLogger();
            default:
                return new Log4NetLogger();
        }
    }
}
