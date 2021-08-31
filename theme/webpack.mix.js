const mix = require('laravel-mix');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

// mix.webpackConfig({
//     plugins: [new LiveReloadPlugin()]
// });

mix.options({
    hmrOptions: {
        host: 'nginx',
        port: '80'
    },
});


mix.js('src/js/app.js', 'js')
