module.exports = function (grunt) {
    var paths = [
        {cwd: 'bootstrap/less'},
        {cwd: 'bootstrap/fonts'},
        {cwd: 'font-awesome/less'},
        {cwd: 'font-awesome/fonts'},
        {
            cwd: 'Yamm/yamm',
            dest: 'yamm/less',
        }
    ].map(function (value) {
        value.src = '**/*'
        if (!value.dest) {
            value.dest = value.cwd
        }
        value.cwd = './node_modules/' + value.cwd
        value.dest = './vendor/' + value.dest
        value.expand = true
        return value
    })
    grunt.initConfig({
        clean: {
            before: ['./vendor']
        },
        copy: {
            vendors: {files: paths}
        },
    })
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.registerTask('default', ['clean', 'copy'])
}