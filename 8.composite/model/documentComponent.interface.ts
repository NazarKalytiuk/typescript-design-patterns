export interface IDocumentComponent {
    gatherData(): string;
    addComponent(component: IDocumentComponent): void;
    // remove
    // get
}
