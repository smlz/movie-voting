// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": ["plugin:vue/essential", "eslint:recommended"],
  "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 6,
      "sourceType": "module",
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    //   "indent": [
    //       "error",
    //       4
    //   ],
      "linebreak-style": [
          "error",
          "unix"
      ],
    //   "quotes": [
    //       "error",
    //       "double"
    //   ],
    //   "semi": [
    //       "error",
    //       "igno"
    //   ],
      "generator-star-spacing": "off",
      // allow debugger during development
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  }
};
