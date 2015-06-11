var jade = require('jade'),
    fs   = require('fs'),
    docs = require('./doc');

var writeJadeToHTML = function (jadefile, options) {
    var compiledJade = jade.compileFile('./jade/' + jadefile + '.jade', {pretty: true});
    var html = compiledJade(options);
    fs.writeFileSync('./' + jadefile + '.html', html);
    console.log(jadefile, 'compiled');
};

for (var mod in docs) {
    writeJadeToHTML(mod, {data: docs[mod], module: mod});
}
writeJadeToHTML('index', {});
writeJadeToHTML('examples', {});
