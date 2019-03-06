module.exports = [{
    devServer: {
        inline:true,
        // port: 8008
        host: process.env.IP,
        port: process.env.PORT || 3000,
        
    },
    entry: "./js/call.jsx",
    output: {
        path: __dirname + '/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['latest', 'react']
            }
        }]
    }
}];