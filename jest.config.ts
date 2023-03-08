import type { Config } from "jest";

const config: Config = {
  verbose: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

export default config;
