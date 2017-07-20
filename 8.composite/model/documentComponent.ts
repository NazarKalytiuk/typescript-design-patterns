import { IDocumentComponent } from './documentComponent.interface';

export class DocumentComponent implements IDocumentComponent {
    public name: string;
    public documentComponents: IDocumentComponent[];
    constructor(name: string) {
        this.name = name;
        this.documentComponents = [];
    }
    public gatherData(): string {
        let result = '';
        result += `<${this.name}>\n`;
        this.documentComponents.forEach(document => {
            result += document.gatherData();
        });
        result += `</${this.name}>\n`;

        return result;
    }

    public addComponent(component: IDocumentComponent): void {
        this.documentComponents.push(component);
    }
}
