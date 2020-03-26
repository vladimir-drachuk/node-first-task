'use strict';

const { program } = require('commander');
const { encode, encryption } = require('./encode')

program
    .requiredOption('-s, --shift <number>', 'a shift')
    .requiredOption('-a, --action <encode/decode>', 'an action encode/decode')
    .option('-i, --input <file-path>', 'an input file')
    .option('-o, --output <file-path>', 'an output file')
    .action(() => {
        const keys = program.opts();
        switch (keys.action) {
            case 'encode':
                encryption(keys);
            break;
            case 'decode':
                keys.shift *= -1;
                encryption(keys);
            break;
            case 'qqq':
                encode(keys);
            break;
            default:
            throw Error('incorrect action');
        }
    });

program.parse(process.argv);