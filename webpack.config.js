const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    externals: [
        'react',
        'react-dom'
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'react-reusables',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
        ]
    }
}