// Generated on 2014-10-28 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

var wrapper1 = "(function (root, factory) { 'use strict'; if (typeof define === 'function' && define.amd) { define(['angular'], factory); } else if (typeof module !== 'undefined' && typeof module.exports === 'object') { module.exports = factory(require('angular')); } else { return factory(root.angular); } }(this, function (angular) { 'use strict'; var moduleName = 'angularTypewrite';\n";

var wrapper2 = "\nreturn moduleName; }));\n";

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-remove');


  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    npmDist: 'npm-dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dev: {
            files: {
                '.tmp/typewrite-module.js': '<%= yeoman.app %>/scripts/app.js',
                '.tmp/typewrite-directive.js': '<%= yeoman.app %>/scripts/directives/typewrite-directive.js',
            }
        }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all', 'babel:dev'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      npmDist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.npmDist %>/{,*/}*',
            '!<%= yeoman.npmDist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 5 versions', 'ie 8', 'ie 9']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/style',
          src: '{,*/}*.css',
          dest: 'dist/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/style',
        cssDir: 'dist',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated',
          sassDir: '<%= yeoman.app %>/style',
          cssDir: 'dist',
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat:dist', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/angular-typewrite.css': [
            '<%= yeoman.dist %>/angular-typewrite.css'
          ]
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/angular-typewrite.js': [
            '<%= yeoman.dist %>/angular-typewrite.js'
          ]
        }
      }
    },
    wrap: {
        basic: {
              src: ['npm-dist/angular-typewrite.js'],
              dest: '.',
              options: {
                      wrapper: [wrapper1, wrapper2]
                    }
            }
    },
    // Concatenates all extensions files into a single file for distribution
    concat: {
        dist: {
            src: [
                '.tmp/typewrite-module.js',
                '.tmp/typewrite-directive.js'
            ],
            dest: '<%= yeoman.dist %>/angular-typewrite.js'
        },
        npmDist: {
            src: [
                '.tmp/typewrite-module.js',
                '.tmp/typewrite-directive.js'
            ],
            dest: '<%= yeoman.npmDist %>/angular-typewrite.js'
        }
    },
    rename: {
      main: {
          files: [
            {src: ['./npm-dist/app/scripts/directives/typewrite-directive.js'], dest: 'npm-dist/angular-typewrite.js'},
                  ]
        }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      },
      npmDist: {
        files: [{
          expand: true,
          flatten: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.npmDist %>',
          src: [
            'style/*'
          ]
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    release: {
        options: {
            additionalFiles: ['bower.json'],
            bump: true, //default: true
            file: 'package.json', //default: package.json
            add: true, //default: true
            commit: true, //default: true
            tag: true, //default: true
            push: true, //default: true
            pushTags: true, //default: true
            npm: false, //default: true
            npmtag: true, //default: no tag
            indentation: '\t', //default: '  ' (two spaces)
            folder: 'dist', //default project root
            beforeBump: [], // optional grunt tasks to run before file versions are bumped
            afterBump: [], // optional grunt tasks to run after file versions are bumped
            beforeRelease: [], // optional grunt tasks to run after release version is bumped up but before release is packaged
            afterRelease: [], // optional grunt tasks to run after release is packaged
            updateVars: [], // optional grunt config objects to update (this will update/set the version property on the object specified)
            github: {
                repo: 'antoniocapelo/angular-typewrite', //put your user/repo here
                accessTokenVar: 'GITHUB_ACCESS_TOKEN' //ENVIRONMENT VARIABLE that contains GitHub Access Token
            }
        }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

grunt.registerTask('build', [
    'clean:dist',
    'autoprefixer',
    'babel',
    'concat:dist',
    'cssmin',
    'uglify'
  ]);

grunt.registerTask('npm-build', [
    'clean:npmDist',
    'autoprefixer',
    'babel',
    'cssmin',
    'concat:npmDist',
    'wrap',
    'copy:npmDist'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};