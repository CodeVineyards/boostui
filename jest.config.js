module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom', // Use 'node' for non-DOM tests
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true, // To collect coverage information
  coverageDirectory: 'coverage', // Where to output coverage files
  coverageReporters: ['text', 'lcov'], // Format of the coverage reports
  // testPathIgnorePatterns: ['/dist/'], // Ignore the dist folder
}
