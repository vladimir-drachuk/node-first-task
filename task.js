const { program } = require('commander');
const { encode, decode } = require('./encode')

program.version('обычная...')
program
    .requiredOption('-s, --shift <number>', 'a shift')
    .requiredOption('-a, --action <encode/decode>', 'an action encode/decode')
    .option('-i, --input <file-path>', 'an input file')
    .option('-o, --output <file-path>', 'an output file');

program
    .action(() => {
        const keys = program.opts();
        switch (keys.action) {
            case 'encode':
                encode(keys);
            break;
            case 'decode':
                decode(keys);
            break;
            default:
            break;
        }
    });

program.parse(process.argv);