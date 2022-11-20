const base = require("../src/base")

describe('基础入门', () => {
  test('add', () => {
    expect(base.add(2, 3)).toBe(5)
  })

  describe('真值', () => {
    test('null', () => {
      expect(null).toBeNull()
    })
    test('undefined', () => {
      expect(undefined).toBeUndefined()
    })
    test('defined', () => {
      const z = 0
      expect(z).toBeDefined()
    })
    test('truthy', () => {
      expect(true).toBeTruthy()
    })
    test('falsy', () => {
      expect(false).toBeFalsy()
    })
  })

  describe('数字', () => {
    test('>', () => {
      expect(3).toBeGreaterThan(2)
    })
    test('>=', () => {
      expect(3).toBeGreaterThanOrEqual(3)
    })
    test('<', () => {
      expect(3).toBeLessThan(4)
    })
    test('<=', () => {
      expect(3).toBeLessThanOrEqual(3)
    })
    test('==', () => {
      expect(3).toBe(3)
      expect(3).toEqual(3)
    })
  })

  describe('字符串', () => {
    test('regexp | string', () => {
      expect('apple').toMatch(/app/)
    })
  })

  describe('数组和可迭代对象', () => {
    test('contain', () => {
      expect([1, 2]).toContain(2)
      expect(new Set([4, 5])).toContain(5)
    })
  })

  describe('对象', () => {
    test.only('{}', () => {
      // 部分匹配
      expect({ foo: 'bar', coo: 'rbe' }).toMatchObject({foo: 'bar'})
      // 完全匹配
      expect({ foo: 'bar' }).toStrictEqual({foo: 'bar'})
    })
  })

  describe('异常', () => {
    test('error', () => {
      expect(() => base.compileCode()).toThrow()
    })
  })

  describe('异步', () => {
    test('Promise', () => {
      return base.fetchData().then(data => {
        expect(data.code).toBe(200)
      })
    })

    test('Async/Await', async () => {
      const data = await base.fetchData()
      expect(data.data).toContain('apple')
    })

    test('.resolves/.rejects', async () => {
      await expect(base.fetchData()).resolves.toMatchObject({
        code: 200,
        data: ['apple', 'banana']
      })
      await expect(base.fetchData(true)).rejects.toMatchObject({
        code: 500,
        data: null
      })
    })
  })
})
