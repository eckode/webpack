import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: '../src/',
  testRegex: '/tests/.*\\.(ts|tsx)$'
};

export default config;
