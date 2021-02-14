module.exports = {
  moduleFileExtensions: ["js", "ts", "tsx", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testURL: "http://localhost/",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  }
};
