import { EventEmitter } from 'node:events';
export class MyEmitter extends EventEmitter {}

const eventGreet = new MyEmitter();

const EVENT_GREET = 'hi';

const callback = (arg) => {
    console.log(arg);
};

eventGreet.on(EVENT_GREET, callback);

eventGreet.once('ONCE', (arg) => {
    setImmediate(() => console.log('ONCE', arg));
});

eventGreet.once('OTHER_ONCE', (arg) => {
    console.log('ONCE', arg);
});

eventGreet.emit(EVENT_GREET, 'Hello world');
eventGreet.emit(EVENT_GREET, 'Hello world');
eventGreet.removeListener(EVENT_GREET, callback);
eventGreet.emit(EVENT_GREET, 'Hello world');
eventGreet.emit('ONCE', 'Hello world  with ONCE');
eventGreet.emit('OTHER_ONCE', 'Hello world  with OTHER ONCE');
