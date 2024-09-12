import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "components/**/*.{js,jsx,ts,tsx}",
    "pages/**/*.{js,jsx,ts,tsx}",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};

export default createJestConfig(customJestConfig);
