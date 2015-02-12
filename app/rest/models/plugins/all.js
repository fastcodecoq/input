var fs = require('fs');
var files = fs.readdirSync('./models/plugins');
var global.plugins = [];

	for (x in files)
		 if(!files[x].match('gitignore|base|config|zip|json|all'))		
		   global.plugins[files[x]] = require('./' + files[x]);
