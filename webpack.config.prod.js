const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    mode: 'production',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true
    }
};