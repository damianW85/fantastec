var mozjpeg = require('imagemin-mozjpeg');

// Morgan VILLEDIEU This shows a full config file!
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bust: new Date().getTime(),

        /* =============== File type declaration =============== */
        
        files: {
            images: '{graphics,images}/{,**/}*.{png,jpg,jpeg,gif,svg,ico}',
            videos: 'videos/{,**/}*.{mp4,mov,ogg,webm}',
            sounds: 'sounds/{,**/}*.{mp3,wav,ogg}',
            sprite: '{graphics,images}/{sprites,sprites-2x,sprites-mobile,sprites-mobile-2x}/{,**/}*.png',
            scss: 'sass/{,**/}*.scss',
            html: '{,**/}*.{html,php,ico}',
            js: 'js/{,**/}*.{js,json,cfg}',
            data: 'data/{,**/}*.{json,xml,frag,vert,js,mtl,obj,jpg}',
            fonts: 'fonts/{,**/}*.{woff,woff2,eot,otf,ttf,svg}',
        },

        paths: {
            src: './src',
            dev: './dev',
            build: './build'
        },

        watch: {
            content: {
                files: ['<%= paths.src %>/*']
            }, //this live reloads html also
            html: {
                files: ['<%= paths.src %>/<%= files.html %>'],
                tasks: ['htmlmin:dev']
            },
            images: {
                files: ['<%= paths.src %>/<%= files.images %>'],
                tasks: ['imagemin', 'manifest:dev']
            }, // watch images added to src
            scripts: {
                files: ['<%= paths.src %>/<%= files.js %>'],
                tasks: ['jshint', 'browserify'],
                options: {
                    spawn: false,
                },
            }, //end of watch scripts
            css: {
                files: ['<%= paths.src %>/<%= files.scss %>'],
                tasks: ['sass:dev', 'autoprefixer:dev'],
                options: {
                    spawn: false,
                }
            } //end of sass watch

        }, //end of watch

        /* =============== TASKS =============== */

        clean: {
            dev: {
                src: ['<%= paths.dev %>/{,**/}*']
            },
            build: {
                src: ['<%= paths.build %>/{,**/}*']
            }
        },

        //Creates manifest files that can be used by preloaders such as PreloadJS.
        manifest: {
            dev: {
                options: {
                    root: 'assets/'
                },
                files: [{
                    cwd: '<%= paths.dev %>/assets/',
                    src: ['<%= files.images %>', '<%= files.sounds %>', '<%= files.videos %>'],
                    dest: '<%= paths.dev %>/preload_manifest.json',
                    filter: 'isFile'
                }]
            },
            build: {
                options: {
                    root: 'assets/'
                },
                files: [{
                    cwd: '<%= paths.build %>/assets/',
                    src: ['<%= files.images %>', '<%= files.sounds %>', '<%= files.videos %>'],
                    dest: '<%= paths.build %>/preload_manifest.json',
                    filter: 'isFile'
                }]
            }
        },

        //Minify images
        imagemin: {
            dev: {
                options: {
                    cache: false,
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg({
                        quality: 65
                    })] // Example plugin usage
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.src %>/assets/',
                    src : '<%= files.images %>',
                    dest: '<%= paths.dev %>'
                }]
            },
            build: {
                options: {
                    cache: false,
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [mozjpeg({
                        quality: 65
                    })] // Example plugin usage
                },
                files: [{
                    expand: true,
                    cwd: '<%= paths.src %>/assets/',
                    src : '<%= files.images %>',
                    dest: '<%= paths.build %>'
                }]
            }
        }, //end imagemin

        concat: {
            extras: {
                src: ['<%= paths.build %>/js/app.js', '<%= paths.dev %>/js/libs/*.js'],
                dest: '<%= paths.build %>/js/all.js',
                filter: 'isFile'
            }
        }, //end concat

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            build: {
                files: {
                    '<%= paths.build %>/js/all.min.js': ['<%= paths.build %>/js/all.js']
                }
            }
        }, //end uglify

        sass: {
            dev: {
                options: {
                    style: 'compressed', //no need for config.rb
                    //compass: 'true', //no need to @import compass
                    // require : 'sassy-buttons' // plugins if needed!
                },
                files: {
                    '<%= paths.dev %>/css/main.css': '<%= paths.src %>/sass/main.scss'
                }
            },
            build: {
                options: {
                    style: 'compressed', //no need for config.rb
                    // compass: 'true', //no need to @import compass
                    // require : 'sassy-buttons' // plugins if needed!
                },
                files: {
                    '<%= paths.build %>/css/main.css': '<%= paths.src %>/sass/main.scss'
                }
            }
        }, //end of sass

        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 version', 'ie 8', 'ie 9']
            },
            dev: {
                files: {
                    '<%= paths.dev %>/css/main.css': '<%= paths.dev %>/css/main.css'
                }
            },
            build: {
                files: {
                    '<%= paths.build %>/css/main.css': '<%= paths.build %>/css/main.css'
                }
            }
        }, //end of autoprefixer

        //Detect errors in your javascript code (Using jshint-stylish for a better console design)
        jshint: {
            options: {
                "esnext": true,
                reporter: require('jshint-stylish')
            },
            all: ['Gruntfile.js', '<%= paths.src %>/js/*.js', '<%= paths.src %>/js/models/*.js']
        },

        //Copy the basic folder hierarchie
        copy: {
            build: {
                cwd: '<%= paths.src %>',
                src: ['*'],
                dest: '<%= paths.build %>',
                expand: true
            },
            dev: {
                cwd: '<%= paths.src %>',
                src: ['**/*'],
                dest: '<%= paths.dev %>',
                expand: true
            },
        },

        browserify: {
            dist: {
                browserifyOptions : {
                    debug: true
                },
                options: {
                    "transform": [["babelify", { "sourceMapRelative": "/Library/WebServer/Documents/Grunt-ES6-Boilerplate/dev" }]]
                },
                files: {
                    "<%= paths.dev %>/js/app.js": "<%= paths.src %>/js/app.js"
                }
            }
        },

        htmlmin: { // Task
            build: { // Target
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: { // Dictionary of files
                    '<%= paths.build %>/<%= files.html %>': '<%= paths.src %>/<%= files.html %>'
                }
            },
            dev: {
                options: { // Target options
                    removeComments: true,
                    collapseWhitespace: true
                }, // Another target
                files: {
                    '<%= paths.dev %>/<%= files.html %>': '<%= paths.src %>/<%= files.html %>'
                }
            }
        },

        //Sync you browser in live
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['<%= paths.dev %>/css/*.css', '<%= paths.dev %>/images/*.*', '<%= paths.dev %>/js/*.js', '<%= paths.dev %>/*.html']
                },
                options: {
                    server: {
                        baseDir: "<%= paths.dev %>"

                    },
                    watchTask: true // < VERY important
                }
            },
            build: {
                bsFiles: {
                    src: ['<%= paths.build %>/css/*.css', '<%= paths.build %>/images/*.*', '<%= paths.build %>/js/main.min.js', '<%= paths.build %>/*.html']
                },
                options: {
                    server: {
                        baseDir: "<%= paths.build %>"

                    },
                    watchTask: true // < VERY important
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-preload-manifest');
    grunt.loadNpmTasks('grunt-newer');

    // define default task calling the dev
    grunt.registerTask('default', ["dev"]);

    // dev and build tasks
    grunt.registerTask('dev', 'Create the dev version of the website', ['clean:dev', 'copy:dev', 'browserify', 'sass:dev', 'newer:imagemin:dev', "browserSync:dev", "manifest:dev", "watch"]);
    grunt.registerTask('build', 'Create the production build version of the website', ['clean:build', 'imagemin:build', 'sass:build', 'copy:build', 'jshint', 'autoprefixer:build', 'concat', 'uglify', 'htmlmin:build', 'manifest:build']);
};