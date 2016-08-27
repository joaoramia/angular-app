var chalk = require('chalk'); //make visuals more readble

var server = require('./server');

var PORT = 3030;

server.listen(PORT, function () {
	console.log(chalk.blue('Server running on port', chalk.magenta(PORT)));
});