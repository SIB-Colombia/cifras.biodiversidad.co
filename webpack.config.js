const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = (env) => {
    const plugins = [
        new ExtractTextPlugin("[name].css"),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        })
    ]

    if (env.NODE_ENV === 'production') {
        plugins.push(
            new CleanWebpackPlugin(['build'], {root: __dirname})
        )
    }

    return {

        entry: {
            "home": path.resolve(__dirname, 'src/entries/client.js'),
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            publicPath: path.resolve(__dirname, 'build')+"/",
            chunkFilename: 'js/[id].[chunkhash].js',
        },
        devServer: {
            port: 9000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: false,
                            presets: ['es2015', 'react', 'stage-2'],
                        }
                    },
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: [ 'css-loader', 'sass-loader' ]
                    })
                },
                {
                    test: /\.(jpg|png|gif|svg)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            fallback: 'file-loader',
                            name: 'images/[name].[hash].[ext]',
                        }
                    }
                },
            ]
        },
        plugins
    }
}