module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({


  	sass: {
      		options: {
        		sourceMap: true
      		},
      		dist: {
        		files: {
          			'./css/style.css': './sass/style.sass'
        		}
      		}
    },
	watch: {
    		scripts: {
        		files: ['**/*.sass'],
        		tasks: ['sass'],
        		options: {
            			spawn: false,
        		},
    		} 
	},
	jshint: {
      all: ['js/*.js']
    },
	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'index.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
            			baseDir: "./"
        						}
                }
            }
        }
  });
  // Load the plugins tasks 

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Default task(s).
  grunt.registerTask('default', ["sass","jshint","browserSync","watch"]);
};
