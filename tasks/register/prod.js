module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'sails-linker:devJs',
		'sails-linker:devStyles',
		'sails-linker:devTpl',
		'sails-linker:prodJsJade',
		'sails-linker:prodStylesJade',
		'sails-linker:devTplJade'
	]);
};
//concat, uglify, cssmin
