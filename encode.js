'use strict';

const fs = require('fs');
const { pipeline, Readable } = require('stream');
const CaesarCipher = require('./caesar')

function encryption(keys) {
    const transformStream = new CaesarCipher(keys.shift);
    const readFormStd = Readable.from(process.stdin);
        pipeline(
            (keys.input !== undefined)
                ? fs.createReadStream(keys.input)
                : readFormStd,
            transformStream,
            (keys.output !== undefined)
                ? fs.createWriteStream(keys.output)
                : process.stdout,
            (err) => { if (err) console.error('Pipline failed', err); },
        )
}

module.exports = { encryption }