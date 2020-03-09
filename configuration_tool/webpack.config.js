module.exports = {
    entry: './main.js',
    target: 'electron',
    output : {
      path: './dist',
      filename: '[name].bundle.js'
    }
}