/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    setupFilesAfterEnv: ['jest-expect-message'],
    testTimeout: 30000
};