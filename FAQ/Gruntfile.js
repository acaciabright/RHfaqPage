module.exports = function(grunt) {

  //Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
			options: {
				sourceMap: true,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
	    build: {
				files: {
				    'dist/js/faqbuilder.min.js': ['js/faq.js', 'js/event.js']
				}
			}
    },
    cssmin: {
			build: {
				files: {
					'dist/css/faqbuilder.min.css': ['css/style.css']
				}
			}
		},
		watch: {
			css: {
				files: ['css/style.css'],
				tasks: ['cssmin:build']
			},
			js: {
				files: ['js/faq.js', 'js/event.js'],
				tasks: ['uglify:build']
			}
		},
    copy: {
      files: {
        cwd: 'php',  // set working folder / root to copy
        src: '*.php',           // copy all files and subfolders
        dest: 'dist/php/',    // destination folder
        expand: true           // required when using cwd
      }
    }
  });

  //Load the plugins that provides their specific tasks.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-contrib-copy');
  //when contrib-watch task is activated by 'grunt watch' in terminal, 
  //min.js file will be automatically dated when changes are made to original file

  //Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);
};