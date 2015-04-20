module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      main: {
        options: {
          engine: 'im',
          sizes: [{
            width: 2280,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 1140,
            suffix: '_large_1x',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['main.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      featured: {
        options: {
          engine: 'im',
          sizes: [{
            width: 720,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 360,
            suffix: '_large_1x',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['{featured*,main_croped}.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      photo: {
        options: {
          engine: 'im',
          sizes: [{
            width: 300,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 150,
            suffix: '_large_1x',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['photo.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
      main_croped_md: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1536,
            suffix: '_medium_2x',
            quality: 50
          },
          {
            width: 768,
            suffix: '_medium_1x',
            quality: 50
          }]
        },

        files: [{
          expand: true,
          src: ['main_croped_md.jpg'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      },
    },


    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean','mkdir','responsive_images']);

};