var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;


//Finde matches line in the file without sort it
	in_file = "stat7.txt"
	out_file = "stat_ext.txt"

var stream = fs.open(in_file, 'r');
var ttt = 0;
console.log ("Begin");
while (!stream.atEnd()) {
	var line = stream.readLine();
	//console.log(line)
	if (line != "") {
		if (ttt==0){
			fs.write(out_file ,line+'\n','w');
			ttt++;
			console.log ("first line")
		} else {
			
			lw=true
			var stream2 = fs.open(out_file, 'r');
			while (!stream2.atEnd()) {
				var line2 = stream2.readLine();
				if (line==line2){
					console.log ("duble del"+line)
					lw=false;
					break;
				} 
			}
			stream2.close();	
			if (lw) fs.write(out_file,line+'\n','a');
		}
	}	
}
console.log('exit');
phantom.exit()
		
					
