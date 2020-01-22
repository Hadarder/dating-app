import { getFakeUsers, setFakeUsers } from "../mockServer/mockServer";
import Ape, { name, age, arrayOf, date, fromValues } from "ape-mock";
import { malePics, femalePics } from "./pictures";

const men = Ape({
  maleUsers: arrayOf({
    firstName: name().male(),
    lastName: name().lastName(),
    age: age().adult(),
    profilePic: fromValues(malePics),
    images: malePics,
    gender: "male",
    date: date()
      .random()
      .startYearsAgo(5)
  }).repeat(25)
});

const women = Ape({
  femaleUsers: arrayOf({
    firstName: name().female(),
    lastName: name().lastName(),
    age: age().adult(),
    profilePic: fromValues(femalePics),
    images: femalePics,
    gender: "female",
    date: date()
      .random()
      .startYearsAgo(5)
  }).repeat(25)
});

async function getFakeUsersFromServer() {
  const fakeUsers = await getFakeUsers();
  if (!fakeUsers) {
    return createAndSaveFakeUsers();
  }
  return fakeUsers.fakeUsers;
}

async function createAndSaveFakeUsers() {
  const { maleUsers } = men.generate();
  const { femaleUsers } = women.generate();
  const fakeUsers = maleUsers.concat(femaleUsers);
  sortUsersByJoinedTime(fakeUsers);
  await setFakeUsers({ fakeUsers });
  return fakeUsers;
}

function sortUsersByJoinedTime(fakeUsers) {
  fakeUsers.sort((userA, userB) =>
    compare(+new Date(userA.date), +new Date(userB.date))
  );
}

function compare(a, b) {
  return b - a;
}

export async function getRecentlyJoineUsers(amount) {
  const fakeUsers = await getFakeUsersFromServer();
  return fakeUsers.slice(0, amount);
}

export async function getRecommendedUsers(lookingFor, amount) {
  const fakeUsers = await getFakeUsersFromServer();
  if (lookingFor !== "Female" && lookingFor !== "Male") {
    return fakeUsers.slice(0,amount);
  }
  return (fakeUsers.filter(user => user.gender === lookingFor.toLowerCase())).slice(0,amount);
}

export async function getUserByName(name) {
  const fakeUsers = await getFakeUsersFromServer();
  return fakeUsers.find(user => user.firstName === name);
}
