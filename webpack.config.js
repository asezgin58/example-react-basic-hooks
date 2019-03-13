const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};

const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
        loader: 'ts-loader'
    }
};

const sassLoader = {
    test: /\.(sass|scss|css)$/,
    use: [
        {
            loader: 'style-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'css-loader',
            options: {
                url: false,
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }
    ],
};

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            jsLoader,
            tsLoader,
            sassLoader
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/public/index.html"
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
        hot: true,
        open: true
        //host: '0.0.0.0',
        // https:true
    }
};