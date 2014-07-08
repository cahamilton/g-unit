'use strict';

module.exports = function(grunt) {

	// Project configuration
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Compile Sass

		// https://github.com/gruntjs/grunt-contrib-sass
		// https://npmjs.org/package/grunt-contrib-sass

		sass: {
			options: {
				unixNewlines: true,
				style: 'nested'
			},
			files: [{
				expand: true,
				cwd: 'scss',
				src: ['**/*.scss', ],
				dest: 'css',
				ext: '.css'
			}],
		},


		// Watch files

		// https://github.com/gruntjs/grunt-contrib-watch
		// https://npmjs.org/package/grunt-contrib-watch

		watch: {
			sass: {
				files: ['**/*.scss', ],
				tasks: ['sass:all']
			},
		},

	});

	// Loads Grunt plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register Grunt tasks
	grunt.registerTask('default', ['sass']);

};
