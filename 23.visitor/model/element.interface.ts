import { IVisitor } from './visitor.interface';
export interface IElement {
    accept(visitor: IVisitor);
}
