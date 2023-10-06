const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    //시작점
    entry: {
        //시작점 여러개 정할수 있음
        main: path.resolve(__dirname, 'src/index.js')
    },
    //웹팩 작업을 통해 생성된 결과물
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,//이전 해쉬 파일 삭제,
        assetModuleFilename: '[name][ext]'//asset 팡리명 해시처리안된게
    },
    module: {
        rules: [
            {
                // test 정의한 정규식파일에대해 아래 로더가 역순으로 적용됨 (scss-loader>css-loader>style-loader)
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            //bable
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //asset
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset/resource'
            }
        ]
    },
    //plugin 은 이미 로더로인해 output으로 변화된 결과물을 변형시키는 것
    plugins: [
        //html도 build때 사용한다. src/index.html을 빌드해서 dist에 index.html을 만든다.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new BundleAnalyzerPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3100,
        open: true,
        hot: true,
        liveReload: true
    }
}