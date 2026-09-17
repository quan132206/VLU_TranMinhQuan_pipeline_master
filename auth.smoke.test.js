const { login } = require('./auth');

test('Đăng nhập đúng admin/123 → trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});
