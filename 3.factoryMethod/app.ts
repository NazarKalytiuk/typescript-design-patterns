import { LoggerProviderFactory } from './LoggerProviderFactory';
import { ILogger } from './model/iLogger';
import { LoggingProvider } from './model/loggingProvider';

function getTypeOfLoggingProvider() {
    return LoggingProvider.EnterpriseLogger;
}

const providerType = getTypeOfLoggingProvider();

let logger: ILogger = LoggerProviderFactory.GetLoggingProvider(providerType);
logger.logMessage('Log');

logger = LoggerProviderFactory.GetLoggingProvider(LoggingProvider.Log4NetLogger);
logger.logMessage('Log2');
