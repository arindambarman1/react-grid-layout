module.exports = {
    context: __dirname,
    entry: [
      "./index", 
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        sourceMapFilename: "[file].map",
    },
    module: {
      loaders: [
        {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
      ]
    },
    resolve: {
      extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    }
};
