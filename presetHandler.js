// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, newPreset) => {
    let response;

    if(index < 0 || index > presets.length - 1)
        return [404];
    if(request.toUpperCase() !== 'GET' && request.toUpperCase() !== 'PUT')
        return [400];
    if(request === 'PUT') {
        presets[index] = newPreset;
        response = presets[index];
    }
    else
        response = presets[index];

    return [200, response];
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
