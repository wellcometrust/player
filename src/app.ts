/// <reference path="js/require.d.ts" />

require.config({
    paths: {
        'jquery': 'js/jquery-1.10.2.min',
        'plugins': 'js/jquery.plugins',
        'underscore': 'js/underscore-min',
        'pubsub': 'js/pubsub',
        'jsviews': 'js/jsviews.min',
        'yepnope': 'js/yepnope.1.5.4-min',
        'yepnopecss': 'js/yepnope.css'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        plugins: {
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        pubsub: {
            deps: ['jquery']
        },
        jsviews: {
            deps: ['jquery']
        },
        yepnopecss: {
            deps: ['yepnope']
        }
    }
});

require([
    'jquery',
    'plugins',
    'underscore',
    'pubsub',
    'jsviews',
    'yepnope',
    'yepnopecss',
    'bootstrapper',
	'extensions/wellcomeplayer-seadragon-extension/extension',
    'extensions/wellcomeplayer-seadragon-extension/provider',
    'extensions/wellcomeplayer-mediaelement-extension/extension',
    'extensions/wellcomeplayer-mediaelement-extension/provider',
	'extensions/coreplayer-pdf-extension/extension',
    'extensions/coreplayer-pdf-extension/provider'],
    ($,
    plugins,
    _,
    pubsub,
    jsviews,
    yepnope,
    yepnopecss,
    bootstrapper,
    seadragonExtension,
    seadragonProvider,
    mediaelementExtension,
    mediaelementProvider,
    pdfExtension,
    pdfProvider) => {

        window.DEBUG = true; // this line is removed on build.

        var extensions = {};

        extensions['seadragon/dzi'] = {
            type: seadragonExtension.Extension,
            provider: seadragonProvider.Provider,
            config: 'extensions/wellcomeplayer-seadragon-extension/config.js',
            css: 'extensions/wellcomeplayer-seadragon-extension/css/styles.css'
        };

        extensions['video/mp4'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            config: 'extensions/wellcomeplayer-mediaelement-extension/config.js',
            css: 'extensions/wellcomeplayer-mediaelement-extension/css/styles.css'
        };

        extensions['video/multiple-sources'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            config: 'extensions/wellcomeplayer-mediaelement-extension/config.js',
            css: 'extensions/wellcomeplayer-mediaelement-extension/css/styles.css'
        };

        extensions['audio/mp3'] = {
            type: mediaelementExtension.Extension,
            provider: mediaelementProvider.Provider,
            config: 'extensions/wellcomeplayer-mediaelement-extension/config.js',
            css: 'extensions/wellcomeplayer-mediaelement-extension/css/styles.css'
        };

        extensions['application/pdf'] = {
            type: pdfExtension.Extension,
            provider: pdfProvider.Provider,
            config: 'extensions/coreplayer-pdf-extension/config.js',
            css: 'extensions/coreplayer-pdf-extension/css/styles.css'
        };

        new bootstrapper(extensions);
    });