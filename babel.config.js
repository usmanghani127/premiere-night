module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@hooks': './src/hooks',
          '@common': './src/common',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@navigation': './src/navigation',
          '@localization': './src/localization',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
      'babel-plugin-react-compiler',
    ],
  ],
};
