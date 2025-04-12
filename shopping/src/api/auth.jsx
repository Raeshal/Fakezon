export const login = async (username, password) => {
  const res = await fetch('https://fakestoreapi.com/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  return data.token;
};
