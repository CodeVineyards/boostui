module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/widgets/(.*)$': '<rootDir>/src/widgets/$1', // Add this line to handle the alias
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  // testPathIgnorePatterns: ['/dist/'],
}
