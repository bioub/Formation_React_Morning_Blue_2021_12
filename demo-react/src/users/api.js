export async function postLogin(credentials) {
  const res = await fetch('http://localhost:4000/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const body = await res.json();

  localStorage.setItem('token', body.token);
}


export async function getUsers() {
  const res = await fetch('http://localhost:4000/users', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  });

  const users = await res.json();

  return users;
}