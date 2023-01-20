module.exports = function (grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        less:{
            development:{
                files: {
                    'dev/styles/main.css' : 'src/styles/main.less'
                }
            },
            dist:{
                options:{
                    compress:true,
                },
                files: {
                    'dist/styles/main.min.css' : 'src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            scripts:{
                files: ['src/scripts/**/*.js'],
                tasks: ['replace:development']
            },
            html:{
                files: ['src/**.html'],
                tasks: ['replace:development']
            }
        },
        replace:{
            development:{
                options:{
                    patterns:[
                        {
                            match:'FILE_CSS',
                            replacement: '../dev/styles/main.css',
                        },
                        {
                            match:'FILE_JS',
                            replacement: '../dev/scripts/main.js',
                        }
                    ]
                },
                files:[
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['src/index.html'], 
                        dest: 'dev/'
                    },
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['src/**/*.js'],  
                        dest: 'dev/scripts/'
                    }
                ]
            },
            dist:{
                options:{
                    patterns:[
                        {
                            match:'FILE_CSS',
                            replacement: '../dist/styles/main.min.css',
                        },
                        {
                            match:'FILE_JS',
                            replacement: '../dist/scripts/main.min.js',
                        }
                    ]
                },
                files:[
                    {
                        expand: true, 
                        flatten: true, 
                        src: ['dist/index.min.html'], 
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    'dist/index.min.html' : 'src/index.html'
                }
            }
        },
        uglify:{
            dist:{
                options:{
                    compress: true,
                },
                files:{
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:dist', 'htmlmin:dist', 'replace:dist', 'uglify:dist'])
}