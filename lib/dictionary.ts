export class Dictionary<TKey, TValue> {
    private keys: string[] = [];
    private values: TValue[] = [];
    public add(key: TKey, value: TValue) {
        this[JSON.stringify(key)] = value;
        this.keys.push(JSON.stringify(key));
        this.values.push(value);
    }
    public containsKey(key: TKey): boolean {
        return this[JSON.stringify(key)] ? true : false;
    }
}
