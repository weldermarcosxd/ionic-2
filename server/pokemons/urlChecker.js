const https = require('https');

function urlChecker(name, callback) {
    https.get('https://img.pokemondb.net/artwork/' + name + '.jpg', (res) => {
        if (res.statusCode == 200) {
            callback('https://img.pokemondb.net/artwork/' + name + '.jpg');
        } else {
            callback('./img/default.jpg');
        }
    });
}

module.exports = function() {
    return urlChecker;
}
