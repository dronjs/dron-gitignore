/**
 Dron module `dron-gitignore`*
*/
function dronGitignore() {
	var file = this.touch('.gitignore');

	return file.safeWrite('node_modules')
	.then(function() {
		return true;
	});
}

module.exports = function factory(argv) {
	return dronGitignore;
}