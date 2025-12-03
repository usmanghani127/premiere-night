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
          '@theme': './src/theme',
          '@navigation': './src/navigation',
          '@localization': './src/localization',
        },
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    ],
  ],
};
