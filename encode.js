'use strict';

const fs = require('fs');
const { pipeline } = require('stream');
const CaesarCipher = require('./caesar')

function encode(keys) {
    let input = keys.input;

    if (input === undefined) {
        process.stdout.write('Enter file path: ');
        process.stdin.on('data', (data) => {
            input = data;
            process.exit();
        }).then((res) => console.log(res));
    }
}


function encryption(keys) {
    const transformStream = new CaesarCipher(keys.shift)
    pipeline(
        fs.createReadStream(keys.input, 'utf8'),
        transformStream,
        fs.createWriteStream(keys.output),
        (err) => { if (err) console.error('Pipline failed', err) }
    )
}

module.exports = { encode, encryption }