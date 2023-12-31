module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
    context: __dirname + "/src",
    entry: './index.js',
  
    output: {
      filename: "index.js",
      path: __dirname + '/dist'
    },
  
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ["react-hot-loader", "babel-loader"],
        }
      ],
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    },
  }