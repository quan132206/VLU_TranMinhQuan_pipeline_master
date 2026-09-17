const { login } = require('./auth');

describe('Regression Tests - các trường hợp ngoại lệ', () => {
  test('Sai mật khẩu → trả về false', () => {
    expect(login('admin', 'sai_mat_khau')).toBe(false);
  });

  test('Username rỗng → throw Error', () => {
    expect(() => login('', '123')).toThrow('Username không được để trống');
  });

  test('Username chỉ toàn khoảng trắng → throw Error', () => {
    expect(() => login('   ', '123')).toThrow('Username không được để trống');
  });

  test('Mật khẩu có ký tự đặc biệt, đúng → trả về true', () => {
    expect(login('bob', 'P@ssw0rd!')).toBe(true);
  });

  test('Mật khẩu có ký tự đặc biệt, sai → trả về false', () => {
    expect(login('bob', 'P@ssw0rd?#')).toBe(false);
  });

  test('Tài khoản bị khóa → trả về false', () => {
    expect(login('john', 'secret')).toBe(false);
  });

  test('Username không tồn tại → trả về false', () => {
    expect(login('no_one', '123')).toBe(false);
  });

  test('Mật khẩu rỗng → throw Error', () => {
    expect(() => login('admin', '')).toThrow('Password không được để trống');
  });
});
