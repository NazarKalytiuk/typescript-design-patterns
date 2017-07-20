import { DocumentComponent } from './model/documentComponent';

const html = new DocumentComponent('html');

const header = new DocumentComponent('header');

const body = new DocumentComponent('body');

const div = new DocumentComponent('div');

const span = new DocumentComponent('span');

div.addComponent(span);
body.addComponent(div);
html.addComponent(header);
html.addComponent(body);

const result = html.gatherData();

console.log(result);
