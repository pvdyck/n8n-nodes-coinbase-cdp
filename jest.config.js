/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.d.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@coinbase/cdp-sdk|jose)/)',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': ['ts-jest', { useESM: false }],
  },
  moduleNameMapper: {
    '^@coinbase/cdp-sdk$': '<rootDir>/test/__mocks__/@coinbase/cdp-sdk.ts',
  },
};
