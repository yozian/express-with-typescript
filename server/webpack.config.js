const path = require("path");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

const bundleFilename = "express-with-typescript-server"

module.exports = {
    // --start--here to specify node application, exclude compile node modules!!!!
    target: "node",
    externals: [nodeExternals({ modulesDir: "../node_modules" })],
    // --end--

    context: __dirname, // to automatically find tsconfig.json
    entry: "./app.ts",
    output: {
        filename: `./build/${bundleFilename}.js`
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', "js"] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
            options: {
                transpileOnly: true // IMPORTANT! use transpileOnly mode to speed-up compilation
            }
        }],
        loaders: []
    },
    plugins: []
};