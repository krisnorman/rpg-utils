/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
    coveragePathIgnorePatterns: ["<rootDir>/tests/mocks/"],
    coverageThreshold: {
      global: {
        branches: 70,
        statements: 85,
      },
    },
  };