const axios = require('axios').default;
const cliProgress = require('cli-progress');

const data = require('./data');

//setup fetch params
const REQUEST_URL = 'https://cemantix.herokuapp.com/score';
const COOKIE = '_ga_7E8QW0JJHF=GS1.1.1655997145.1.0.1655997145.0; _ga=GA1.1.392064363.1655997140';
let best_words = [];

const bar = new cliProgress.SingleBar({
    format: 'Progress |' + '{bar}| {percentage}% || {value}/{total}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true,
    stopOnComplete: true,
    fps: 60,
    speed: 'N/A'
});
bar.start(data.length, 0);

async function findWord() {

    for (let i = 0; i < data.length; i++) {
        bar.update(i);
        try {
            const resp = await axios.post(REQUEST_URL, `word=${data[i]}`, { headers: { 'Cookie': COOKIE } });
            if (resp.data.percentile && resp.data.percentile == 1000) {
                console.log('\x1b[42m', '=> The word is "' + data[i] + '"', '\x1b[0m');
                bar.stop();
                process.exit();
            }
            else if(resp.data.percentile && resp.data.percentile >= 990) {
                console.log('\x1b[43m', '=> Word in the top 10 : "' + data[i] + '"', '\x1b[0m');
                best_words.push(data[i]);
            }
        }
        catch (err) {
            console.log('\x1b[41m', data[i], '\x1b[0m');
        }
    }

    bar.stop();
    console.log(" => The best words are : " + best_words);
}

findWord();