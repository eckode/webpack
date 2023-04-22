import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    coverageDirectory: '<rootDir>/coverage'
};

export default config;
