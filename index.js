const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['00905528071371'];
    const message = 'Good Morning.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));