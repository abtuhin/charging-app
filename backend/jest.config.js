// jest.config.js
module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*.spec.js'],
  modulePathIgnorePatterns: [
    '<rootDir>/config/',
    '<rootDir>/models/',
    '<rootDir>/coverage/',
    '<rootDir>/routes/',
    '<rootDir>/migrations/',
    '<rootDir>/seeders/',
    '<rootDir>/node_modules/'
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    './**/*.js',
    '!connection.js',
    '!jest.config.js',
    '!server.js',
  ],
};
