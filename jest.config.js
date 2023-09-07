const nextJest = require('next/jest');
const path = require('path');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/pages/Portfolio/(.*)$': '<rootDir>/pages/Portfolio/$1',
    '^@/widgets/(.*)$': '<rootDir>/widgets/$1',
    '^@/shared/(.*)$': '<rootDir>/shared/$1',
    '^@/features/(.*)$': '<rootDir>/features/$1',
    '^@/entities/(.*)$': '<rootDir>/entities/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);
