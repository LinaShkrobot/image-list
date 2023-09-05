const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Ваш главный файл приложения
  output: {
    filename: 'bundle.js', // Имя бандла
    path: path.resolve(__dirname, 'dist'), // Путь для сохранения бандла
  },
};
