module.exports = function(grunt) {
  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Configure Grunt
  grunt.initConfig({

    // run jshint
    jshint: {
      files: {
        src: ['src/**/*.js']
      }
    },

    // https://github.com/blai/grunt-express
    express: {
      all: {
        options: {
          bases: ['C:\\Users\\Oskar\\gitrepos\\skeleton'],
          port: 8080,
          hostname: "0.0.0.0",
          livereload: true
        }
      }
    },

    // https://www.npmjs.org/package/grunt-open
    open: {
      all: {
        path: 'http://localhost:8080/index.html'
      }
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      all: {
        files: ['**/*.html', 'src/**/*.js'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'express',
    'open',
    'watch'
  ]);
};