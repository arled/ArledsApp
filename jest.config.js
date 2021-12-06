module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^[./a-zA-Z0-9$_-]+\\.(jpg|jpeg|png)$': '<rootDir>/src/lib/utils/mediaFileTransformer.js',
    '^.+\\.svg$': '<rootDir>/src/lib/utils/mediaFileTransformer.js',
  },
};
