let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.js('resources/assets/js/app.js', 'public/js')
.js('node_modules/jquery/dist/jquery.min.js','public/js')
.js('node_modules/assets/plugins/bootstrap/js/bootstrap.min.js','public/js')
.js('node_modules/assets/plugins/bootstrap/js/bootsnav.js','public/js')
.js('node_modules/jquery-nice-select/js/jquery.nice-select.min.js','public/js')
.js('node_modules/aos/dist/aos.js','public/js')
.js('node_modules/assets/plugins/slick-slider/slick.js','public/js')
.js('node_modules/assets/js/uikit.min.js','public/js')
.js('node_modules/assets/js/viewportchecker.js','public/js')
.js('node_modules/assets/plugins/bootstrap/js/wysihtml5-0.3.0.js','public/js')
.js('node_modules/assets/plugins/bootstrap/js/bootstrap-wysihtml5.js','public/js')
.js('node_modules/assets/js/custom.js','public/js')
.js('node_modules/assets/js/start.js','public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
mix.styles(['node_modules/assets/plugins/bootstrap/css/bootstrap.min.css',
'node_modules/assets/plugins/bootstrap/css/bootstrap-select.min.css',
'node_modules/assets/plugins/icons/css/icons.css',
'node_modules/assets/plugins/animate/animate.css',
'node_modules/assets/plugins/bootstrap/css/bootsnav.css',
'node_modules/assets/plugins/nice-select/css/nice-select.css',
'node_modules/aos/dist/aos.css',
'node_modules/assets/plugins/slick-slider/slick.css',
'node_modules/assets/css/responsiveness.css',
'node_modules/assets/css/style.css',
'node_modules/assets/css/skin/default.css',
'node_modules/assets/css/uikit.min.css'], 'public/css/all.css');
