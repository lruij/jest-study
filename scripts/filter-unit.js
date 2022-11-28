const path = require('path')
module.exports = testPaths => {
  const onlyTests = [
    '__tests__/mock.test.js'
  ]

  const filteringFunction = function (t) {
    return onlyTests.some(tt => t.includes(path.normalize(tt)))
  }

  const allowedPaths = testPaths
    .filter(filteringFunction)
    .map(test => ({test}));

  return {
    filtered: allowedPaths,
  };
};
