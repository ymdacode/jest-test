import greet from './sum.js'

test('call user name', () => {
  expect(greet("user",true)).toBe("hello user")
})

test('call not user name', () => {
  expect(greet("user",false)).toBe(false)
})