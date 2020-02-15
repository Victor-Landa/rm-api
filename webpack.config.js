// Con path (de node) podemos movernos dentro del directorio de nuestro proyecto.
// Sin importar si estamos en local o en cloud.
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Creamos un módulo que va exportar cada configuración que va a suceder.
module.exports = {
  // Necesitamos crear un punto de entrada.
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // el compilado que se va a crear de todo lo que tiene nuestro proyecto en JS
    // se va a llamar main.js cuando esté listo para producción.
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        // Babel Structure
        test: /\.js?$/,
        // Excluimos la carpeta de node_modules
        exclude: /node_modules/,
        // Usamos un loader o una configuración establecida para 
        // trabajar todo nuestro código.
        use: {
          loader: 'babel-loader',
        } 
      }
    ]
  },
  // Establecemos los plugins que vamos a utilizar
  plugins: [
    new HtmlWebpackPlugin([
      // El primer elemento que vamos a establecer es el inject 
      // (¿Cómo vamos a inyectar un valor a un archivo HTML)
      {
        inject: true,
        // Específicamos un template
        template: './public/index.html',
        // Output
        filename: './index.html'
      }
    ])
  ]
}