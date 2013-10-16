/// <reference path="js/require.d.ts" />

require.config({
    paths: {
        'jquery': 'js/jquery-1.10.2.min',
        'plugins': 'js/jquery.plugins',
        'console': 'js/console',
        'pubsub': 'js/pubsub',
        'jsviews': 'js/jsviews.min',
        'yepnope': 'js/yepnope.1.5.4-min',
        'yepnopecss': 'js/yepnope.css',
        'openseadragon': 'modules/coreplayer-seadragoncenterpanel-module/js/openseadragon.min',
        'mediaelement': 'modules/coreplayer-mediaelementcenterpanel-module/js/mediaelement-and-player'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        plugins: {
            deps: ['jquery']
        },
        pubsub: {
            deps: ['jquery']
        },
        jsviews: {
            deps: ['jquery']
        },
        yepnopecss: {
            deps: ['yepnope']
        },
        mediaelement: {
            deps: ['jquery']
        }
    }
});

require([
    'jquery',
    'plugins',
    'console',
    'pubsub',
    'jsviews',
    'yepnope',
    'yepnopecss',
    'openseadragon',
    'mediaelement',
    'bootstrapper',
    'extensions/wellcomeplayer-seadragon-extension/app',
    'extensions/wellcomeplayer-seadragon-extension/provider',
    'extensions/wellcomeplayer-mediaelement-extension/app',
    'extensions/wellcomeplayer-mediaelement-extension/provider'
    ],
    ($, 
    plugins, 
    console, 
    pubsub, 
    jsviews,
    yepnope,
    yepnopecss,
    openseadragon,
    mediaelement,
    bootstrapper, 
    seadragonExtension, 
    seadragonProvider,
    mediaelementExtension,
    mediaelementProvider) => {

        var extensions = {};

        extensions['seadragon/dzi'] = {
            type: seadragonExtension.App,
            provider: seadragonProvider.Provider,
            config: 'extensions/wellcomeplayer-seadragon-extension/config.js',
            css: 'extensions/wellcomeplayer-seadragon-extension/css/styles.css'
        };

        extensions['video/mp4'] = {
            type: mediaelementExtension.App,
            provider: mediaelementProvider.Provider,
            config: 'extensions/wellcomeplayer-mediaelement-extension/config.js',
            css: 'extensions/wellcomeplayer-mediaelement-extension/css/styles.css'
        };

        extensions['audio/mp3'] = {
            type: mediaelementExtension.App,
            provider: mediaelementProvider.Provider,
            config: 'extensions/wellcomeplayer-mediaelement-extension/config.js',
            css: 'extensions/wellcomeplayer-mediaelement-extension/css/styles.css'
        };

        new bootstrapper(extensions);
    });