
const mock = require('../src/mock')

const axios = require('axios')

// 开启 axios 的模拟
jest.mock('axios')


const mytest = require('../src/mytest')
// 自定义模块导出内容
jest.mock('../src/mytest.js', () => {
  const oModule = jest.requireActual('../src/mytest.js')
  return {
    __esModule: true,
    ...oModule,
    default: jest.fn(() => 'mocked mytest')
  }
})

describe('mock', () => {
  test('属性', () => {

    const mockCallback = jest.fn(x => 42 + x)
    mock.forEach([0, 1], mockCallback)

    // 函数调用次数 .mock.calls.length
    expect(mockCallback.mock.calls.length).toBe(2)

    // 函数参数对应值 .mock.calls
    expect(mockCallback.mock.calls[0][0]).toBe(0)

    // 函数调用返回的值 mock.results
    expect(mockCallback.mock.results[0].value).toBe(42)

    console.log(mockCallback.mock.results)
    // 函数上下文 mock.contexts
    expect(mockCallback.mock.contexts[0]).toBeUndefined()

    // 函数实例对象 mock.instances
    expect(mockCallback.mock.instances.length).toBe(2)

    // 函数最后调用值 mock.lastCall
    expect(mockCallback.mock.lastCall[0]).toBe(1)
  })

  test('函数返回值', () => {
    const myMock = jest.fn()

    // 依次返回值自定义 mockReturnValueOnce
    myMock.mockReturnValueOnce(1).mockReturnValueOnce(true).mockReturnValueOnce('zhen')

    // 每次调用执行一次返回
    expect(myMock()).toBe(1)
    expect(myMock()).toBeTruthy()
    expect(myMock()).toBe('zhen')
  })

  test('模拟模块 axios', () => {
    const users = [{ name: 'jest' }]
    const resp = { data: users }

    axios.get.mockResolvedValue(resp)

    return mock.getUsers().then(data => expect(data).toEqual(users))
  })

  test('模拟导入模块', () => {
    const mTest = mytest.default()

    expect(mTest).toBe('mocked mytest')
  })
})
