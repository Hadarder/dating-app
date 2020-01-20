import { getUsers, setUsers } from "../mockServer/mockServer";

const createUser = (
  username,
  password,
  name = "",
  age = 0,
  gender = "",
  lookingFor = ""
) => {
  return {
    username,
    password,
    name,
    age,
    gender,
    lookingFor
  };
};

async function getUsersFromServer() {
  const users = await getUsers();
  return users ? users.users : [];
}

function checkUsername(user, username) {
  return user.username === username;
}

function isUserExists(users, username) {
  return users.some(user => checkUsername(user, username));
}

function isCorrectPassword(user, password) {
  return user.password === password;
}

function getUserByUserName(users, username) {
  return users.find(user => user.username === username);
}

export async function addUser(username, password) {
  const users = await getUsersFromServer();
  let response = null;
  if (!isUserExists(users, username)) {
    const newUser = createUser(username, password);
    users.push(newUser);
    await setUsers({ users });
    response = newUser;
  }
  return response;
}

export async function getLoggedUserData(username, password) {
  let response = null;
  const users = await getUsersFromServer();
  const user = getUserByUserName(users, username);
  response = user && isCorrectPassword(user, password) ? user : null;
  return response;
}
