const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/*', (req, res) => {
    _log('*** React app local server running **** ')
    _log('Base path ' + path.join(__dirname))
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});
const port = process.env.PORT || 9000

app.listen(port, () => {
    _log("Application production has started. Listening on port:" + port);
});

function _log() {
    if (process.env.NODE_ENV !== 'test') {
        console.log("Log " + getLogDate(), arguments[0]);
    }
}
function getLogDate() {
    let date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
