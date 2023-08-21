import { createInterface } from 'node:readline';
import { stdin as input, stdout as output, exit } from 'node:process';

const consoleInterface = createInterface({ input, output });

export const printConsole = () => {
    consoleInterface.on('line', (userLine) => {
        if (userLine) console.log(`Entrada del usuario ${userLine}`);
    });

    consoleInterface.on('SIGINT', () => {
        console.log(
            '\x1b[33m%s\x1b[0m',
            '\nCerrando la interfaz de consola...',
        );
        consoleInterface.close();

        console.log('\x1b[33m%s\x1b[0m', '\nCerrando el  programa...');
        exit(0);
    });
};
