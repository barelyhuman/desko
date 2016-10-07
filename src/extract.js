const { dialog } = require('electron').remote
var targz = require('tar.gz');


var deskoInstall = function(a,b){
	targz().extract(a, b, function(err){
	  if(err)
	    console.log('Something is wrong ', err.stack);
	dialog.showMessageBox(
        {
                type: 'info',
                buttons: ['OK'],
                title: 'Software Installed',
                message: 'The Selected software has been installed',

        })
	//console.log('Job done!');
	});
}

export default deskoInstall
