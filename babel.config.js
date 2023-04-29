module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@components': ['./src/components'],
          '@modules': ['./src/modules'],
          '@api': ['./src/api'],
        },
      },
    ],
  ],
};
