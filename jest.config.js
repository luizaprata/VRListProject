module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tests/helpers/create-query-client-wrapper.tsx'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/tests/setupServerTests.ts',
  ],
};
