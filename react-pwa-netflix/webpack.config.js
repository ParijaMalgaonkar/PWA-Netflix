const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { webpack } = require('webpack');
const {InjectManifest} = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
      publicPath: '/'
    },
    watch: true,
    devServer: {
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.css?$/,
                use: ['style-loader' , 'css-loader']
            },
            {
                test: /\.(png | j?g | svg | gif)?$/,
                use: 'file-loader?name=./Images/[name].[ext]',
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        }),

        new Dotenv({
            path: './.env',
            systemvars: true
        }),

        new InjectManifest({
            swSrc: './src/src-sw.js',
            swDest: 'sw.js',
            // exclude: [
            //     /\.map$/,
            //     /manifest$/,
            //     /\.htaccess$/,
            //     /service-worker\.js$/,
            //     /sw\.js$/,
            //   ],
        }), 

        new CopyPlugin({
            patterns: [
                {from: "./src/favicon.ico", to: ""},
                {from: "./src/manifest.json", to: ""},
                {from: "./src/logo192.png", to: ""},
                {from: "./src/logo512.png", to: ""},
            ]
        }),

        new LiveReloadPlugin({
            port: 5000,
        })
        
    ],
  };