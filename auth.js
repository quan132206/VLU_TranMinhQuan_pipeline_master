const USERS = [
  { username: 'admin', password: '999',       locked: false },
  { username: 'bob',   password: 'P@ssw0rd!', locked: false },
  { username: 'john',  password: 'secret',    locked: true  },
];

function login(username, password) {
  if (typeof username !== 'string' || username.trim() === '') {
    throw new Error('Username không được để trống');
  }
  if (typeof password !== 'string' || password.length === 0) {
    throw new Error('Password không được để trống');
  }

  const user = USERS.find((u) => u.username === username);
  if (!user) return false;
  if (user.locked) return false;

  return user.password === password;
}

module.exports = { login };
