const storage = window.localStorage;

export function getUsers() {
  return new Promise(resolve => resolve(JSON.parse(storage.getItem("users"))));
}

export function getFakeUsers() {
  return new Promise(resolve => resolve(JSON.parse(storage.getItem("fakeUsers"))));
}

export function setFakeUsers(fakeUsers) {
  storage.setItem("fakeUsers", JSON.stringify(fakeUsers));
  return new Promise(resolve => resolve("success"));
}


export function setUsers(users) {
  storage.setItem("users", JSON.stringify(users));
  return new Promise(resolve => resolve("success"));
}
