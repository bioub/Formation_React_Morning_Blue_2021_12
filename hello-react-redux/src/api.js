export function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
}
