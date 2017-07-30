export class MessagesSearcher {
    protected dateSent: Date;
    protected personName: string;
    protected importanceLevel: number;

    constructor(dateSent: Date, personName: string, importanceLevel: number) {
        this.dateSent = dateSent;
        this.personName = personName;
        this.importanceLevel = importanceLevel;
    }

    public search() {
        this.createDateCriteria();
        this.createSentPersonCriteria();
        console.log('Template method does some verification accordingly to search algo.');
        this.createImportanceCriteria();
        console.log('Template method verifies if message could be so important or useless from person provided in criteria.');

        return 'some info';
    }

    protected createDateCriteria() {
        console.log('Standard date criteria has been applied.');
    }
    protected createSentPersonCriteria() {
        console.log('Standard person criteria has been applied.');
    }
    protected createImportanceCriteria() {
        console.log('Standard importance criteria has been applied.');
    }
}
