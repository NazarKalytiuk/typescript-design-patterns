import { MessagesSearcher } from './messagesSearcher';
export class UselessMessagesSearcher extends MessagesSearcher {
    constructor(dateSent: Date, personName: string) {
        super(dateSent, personName, 1);
    }

    protected createImportanceCriteria() {
        console.log('Special importance criteria has been formed: USELESS');
    }
}
