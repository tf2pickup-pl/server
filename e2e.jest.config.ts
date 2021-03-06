import type { Config } from '@jest/types';
import { defaults } from 'jest-config';
import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from './tsconfig.json';

const config: Config.InitialOptions = {
  ...defaults,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/e2e/**/*.e2e-spec.ts',
  ],
  globalSetup: '<rootDir>/e2e/setup.ts',
  globalTeardown: '<rootDir>/e2e/teardown.ts',
};
export default config;
