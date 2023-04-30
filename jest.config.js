module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tests/helpers/create-query-client-wrapper.tsx'],
  setupFilesAfterEnv: [
    '<rootDir>/tests/jest-setup.ts',
    '<rootDir>/tests/jest-setup-server.ts',
  ],
};
