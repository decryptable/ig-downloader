/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
    "^.+\\.(js|jsx)$": ["babel-jest"],
  },
  extensionsToTreatAsEsm: [".ts"],
  transformIgnorePatterns: [
    "node_modules/(?!node-fetch|data-uri-to-buffer|fetch-blob|formdata-polyfill)",
  ],
};
