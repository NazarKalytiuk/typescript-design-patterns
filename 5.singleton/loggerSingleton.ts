export class LoggerSingleton {
    private static _instance: LoggerSingleton;
    private constructor() {
        console.log('Creating new instance...');
    }
    public static instance(): LoggerSingleton {
        this._instance = this._instance || new LoggerSingleton();

        return this._instance;
    }
}
