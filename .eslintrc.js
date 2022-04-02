module.exports = {
  "parser": "@babel/eslint-parser",
  "extends": "eslint:recommended",
  "env": {
    "commonjs": true,
    "es6": true,
    "node": true,
    "browser": false
  },
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": false
    },
    "sourceType": "module",
    "requireConfigFile": false
  },
  "globals": {
    "strapi": true
  },
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    "no-console": 0,
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
};
