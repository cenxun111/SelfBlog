const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    devServer: {
        // port:9000,
        historyApiFallback: true,
        proxy: {
               "/api":'http://localhost:6400',
            },
        
      },
    entry:"./src/index.js",
    output:{
        path: path.join(__dirname,"/dist"),
        // publicPath: './',
        filename:"index_bundle.js"
    },
    // resolve: {
    //     extensions: [".js", ".jsx"]
    // },
 
    
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader",'postcss-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                  },
                ],
              },
        ]
     
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
};