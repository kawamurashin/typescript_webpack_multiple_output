const path = require('path');
const publicIndex = {
    mode: 'development',
    entry: './src/public/index/main.ts',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "dist/public/script"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader",
            options: {
                configFile: "src/public/index/tsconfig.json",
            }
        }]
    },
    resolve: {
        extensions: [
            '.ts'
        ],
    },
};
const server = {
    mode: 'development',
    entry: './src/server/main.ts',
    devtool: 'source-map',
    target: 'node',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                configFile: 'src/server/tsconfig.json',
            },
        }],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    }
};
module.exports = [publicIndex, server];