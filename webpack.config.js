var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

var DEBUG = !(process.env.NODE_ENV === 'production');
var env = {
    NODE_ENV: process.env.NODE_ENV,
    API_BASE_URL: process.env.API_BASE_URL,
    PHP_API_BASE_URL: process.env.PHP_API_BASE_URL
};

var config = {
    devtool: DEBUG ? 'source-map' : false,
    entry: {
        app: './app/app',
        vendor: [
            'react',
            'react-router',
            'redux',
            'react-dom',
            'react-cookie',
            'lodash',
            'bluebird',
            'humps',
            'history'
        ]
    },
    resolve: {
        root: [path.join(__dirname, 'app')]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(env)
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
};


if (DEBUG) {
    config.entry.dev = [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
    ];

    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filname: 'vendor.js'
        })
    ]);
    config.output.publicPath = 'http://localhost:3001/static/';
    config.module.loaders[0].query = {
        "env": {
            "development": {
                "presets": ["react-hmre"]
            }
        }
    }
} else {
    config.plugins = config.plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filname: '[name].[chunkhash].js'
        }),
        new webpack.optimize.UglifyJsPlugin(),
    ])
}

module.exports = config;
