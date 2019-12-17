const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const FixDefaultImportPlugin = require("webpack-fix-default-import-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { GenerateSW } = require("workbox-webpack-plugin")

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                context: path.resolve(__dirname, 'src'),
                            },
                        },

                    },
                    "sass-loader",
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new GenerateSW({
            importWorkboxFrom: "local"
        }),
        new CopyWebpackPlugin([
            { 
                from: "public", 
                ignore: [".gitkeep"]
            },
        ]),
        new HtmlWebpackPlugin({
            template: "!!handlebars-loader!src/index.hbs",
        }),
        new FixDefaultImportPlugin(),
    ],
}
