import { MessagesSearcher } from './messagesSearcher';
export class ImportantMessagesSearcher extends MessagesSearcher {
    constructor(dateSent: Date, personName: string) {
        super(dateSent, personName, 3);
    }
    protected createImportanceCriteria() {
        console.log('Special importance criteria has been formed: IMPORTANT');
    }
}
