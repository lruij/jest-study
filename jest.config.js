module.exports = {
  // 完成测试后将所有错误打印到控制台
  bail: true,
  // jsdom 环境提供 Web API
  testEnvironment: 'jsdom',
  // 测试中是否所有模块都自动模拟
  automock: false,
  // 在每次测试前自动清除模拟的上下文
  clearMocks: true,
  // 指出是否收集测试时的覆盖率信息
  collectCoverage: true,
  // 应该输出的覆盖率目录
  coverageDirectory: 'coverage',
  // 覆盖率报告格式
  coverageReporters: ['html', 'lcov', 'text'],
  // 忽略路径匹配
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  // 根目录
  rootDir: __dirname,
  // 测试的正则表达式字符串次数组
  testMatch: ['<rootDir>/__tests__/**/*test.[jt]s?(x)'],
  // 用于跳过测试的正则表达式模式字符串数组
  testPathIgnorePatterns: ['/node_modules/'],
  // 全局变量
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: require('./package.json').version
  }
}
