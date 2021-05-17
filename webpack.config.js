const path = require('path');

module.exports = {
  mode: "production", 
  entry: "./app/entry", 
  output: { 
    path:path.resolve(__dirname, "dist"), 
    filename: "[name].js", 
    publicPath: "/assets/", 
    library: {  
      type: "umd", 
      name: "MyLibrary", 
    },
    uniqueName: "my-application", 
    name: "my-config", 
  },
  module: { 
    rules: [ 
      { 
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ], 
        issuer: /\.css$/,
        issuer: path.resolve(__dirname, "app"),
        issuer: { and: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { or: [ /\.css$/, path.resolve(__dirname, "app") ] },
        issuer: { not: [ /\.css$/ ] },
        issuer: [ /\.css$/, path.resolve(__dirname, "app") ],  
        loader: "babel-loader", 
        options: {
          presets: ["es2015"]
        }, 
        use: [ 
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              // ...
            }
          }
        ],
        type: "javascript/auto", 
      },
      {
        oneOf: [ 
        ] 
      },
      { 
        rules: [ 
        ] 
      },
    ], 
  },
  resolve: { 
    modules: ["node_modules",path.resolve(__dirname, "app")], 
    extensions: [".js", ".json", ".jsx", ".css"], 
    alias: { 
      "module": "new-module", 
      "only-module$": "new-module", 
      "module": path.resolve(__dirname, "app/third/module.js"), 
      "module": path.resolve(__dirname, "app/third"), 
      [path.resolve(__dirname, "app/module.js")]: path.resolve(__dirname, "app/alternative-module.js"), 
    }, 
  },
  performance: {
    hints: "warning", // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", 
  context: __dirname,  
  target: "web", 
  externals: ["react", /^@angular/],
   
  externalsType: "var", 
  externalsPresets: { /* ... */ },
  
  ignoreWarnings: [/warning/],
  stats: "errors-only",
  stats: { 
    preset: "errors-only", 
    env: true, 
    outputPath: true, 
    publicPath: true, 

    assets: true, 
    entrypoints: true, 
    chunkGroups: true,  
    chunks: true, 
    modules: true, 
    children: true,  
    logging: true, 
    loggingDebug: /webpack/, 
    loggingTrace: true, 

    warnings: true, 

    errors: true, 
    errorDetails: true, 
    errorStack: true, 
    moduleTrace: true, 

    builtAt: true, 
    errorsCount: true, 
    warningsCount: true, 
    timings: true, 
    version: true, 
    hash: true, 
  },
  devServer: {
    proxy: {  
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), 
    compress: true, 
    historyApiFallback: true, 
    hot: true, 
    https: false,  
    noInfo: true,  
  },
  experiments: {
    asyncWebAssembly: true, 
    syncWebAssembly: true, 
    outputModule: true, 
    topLevelAwait: true, 
  },
  plugins: [
    // ...
  ], 
  optimization: {
    chunkIds: "size", 
    moduleIds: "size", 
    mangleExports: "size", 
    minimize: true, 
    minimizer: [new CssMinimizer(), "..."], 

    splitChunks: {
      cacheGroups: {
        "my-name": { 
          test: /\.sass$/,
          type: "css/mini-extract", 
        }
      },

      fallbackCacheGroup: { /* Advanced (click to show) */ } 
    }
  }, 
}