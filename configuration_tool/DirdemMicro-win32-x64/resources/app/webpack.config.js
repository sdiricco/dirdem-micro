/**
 * per utilizzare questo file config = npx webpack --config webpack.config.js # verificare
 */

 /*
const path = require('path');

module.exports = {
  entry: './main.js',
  output: 
  {  
    filename: 'electron.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'electron-renderer',
  // i loaders permettono di processare dal webpack tipi di file che non siano javascript o JSON
  module: 
  {
    rules: 
    [ 
      // dico al compilatore che quando trova un file .txt in un "require" o "import" utilizzi il raw-loader per trasformarlo e aggiungerlo al bundle
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  mode: 'production'
};
*/