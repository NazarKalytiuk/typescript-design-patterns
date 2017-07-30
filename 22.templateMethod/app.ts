import { ImportantMessagesSearcher } from './model/importantMessagesSearcher';
import { MessagesSearcher } from './model/messagesSearcher';
import { UselessMessagesSearcher } from './model/uselessMessagesSearcher';

let searcher: MessagesSearcher = new ImportantMessagesSearcher(new Date(), 'name');
searcher.search();
searcher = new UselessMessagesSearcher(new Date(), 'name2');
searcher.search();
