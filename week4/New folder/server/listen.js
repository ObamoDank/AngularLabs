module.exports = function(app, path){
    let http = require('http').Server(app);

    let server = http.listen(3000, function(req, res){
        console.log('Server up...');
    })
}