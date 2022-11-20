module.exports = {
  // 添加
  add(a, b) {
    return a + b;
  },
  // error
  compileCode() {
    throw new Error('compile code failed')
  },
  // Promise
  fetchData(isFalse) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFalse) {
          reject({
            code: 500,
            data: null
          })
        } else {
          resolve({
            code: 200,
            data: [
              'apple',
              'banana'
            ]
          })
        }
      }, 2000)

    })
  }
}
