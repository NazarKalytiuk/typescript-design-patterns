import { FriendCafeVisitor } from './model/friendCafeVisitor';

const maria = new FriendCafeVisitor('water');
const john = new FriendCafeVisitor('steak', maria);
const nick = new FriendCafeVisitor('cappuccino', john);

nick.handleFood('water');
nick.handleFood('cappuccino');
nick.handleFood('steak');
