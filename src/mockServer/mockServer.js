const storage = window.localStorage;

export function getUsers() {
  return new Promise(resolve => resolve(JSON.parse(storage.getItem("users"))));
}

export function setUsers(users) {
  storage.setItem("users", JSON.stringify(users));
  return new Promise(resolve => resolve("success"));
}
