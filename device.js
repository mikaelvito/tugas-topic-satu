const fs = require('fs');
const os = require('os');

const createDevice = function(device) {
    fs.writeFileSync('./deivce.json', JSON.stringify(device));
}

createDevice({
    User: os.userInfo(),
    Processor: os.arch(),
    SisaRamnya: os.freemem(),
});

