'use strict';

const fs = require('fs');
const { pipeline, Readable } = require('stream');
const CaesarCipher = require('./caesar')

function encryption(keys) {
    const transformStream = new CaesarCipher(keys.shift);
    if (keys.input !== undefined) {
        pipeline(
            fs.createReadStream(keys.input, 'utf8'),
            transformStream,
            (keys.output)
                ? fs.createWriteStream(keys.output)
                : process.stdout,
            (err) => { if (err) console.error('Pipline failed', err); },
        )
    }
    
    
    
    /*else {
        process.stdin.on('data', (data) => {
            const readFormStd = Readable.from(data.toString());
            pipeline(
                readFormStd,
                transformStream,
                (keys.output)
                    ? fs.createWriteStream(keys.output)
                    : process.stdout,
                (err) => { if (err) console.error('Pipline failed', err); },
            )

        })
    }*/
}

module.exports = { encryption }