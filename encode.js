function encode(keys) {
    let input = keys.input;

    if (input === undefined) {
        process.stdout.write('Enter an encode file path: ');
        process.stdin.on('data', (data) => {
            input = data;
            process.exit();
        });
    }

}

function decode(keys) {
    console.log('decoding...')
}

module.exports = { encode, decode }