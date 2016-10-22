const { dialog } = require('electron').remote
const { ipcRenderer } = require('electron')
const spawn = require('child_process').spawn;

var extractScript = "./scripts/extract.sh"

var deskoInstall = function(archive,ePath){
	ipcRenderer.send('show-popup');
	spawn("sh",[extractScript,archive,ePath]);
}

export default deskoInstall
