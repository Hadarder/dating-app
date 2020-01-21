import { getFakeUsers, setFakeUsers } from "../mockServer/mockServer";
import Ape, { name, age, arrayOf, date } from "ape-mock";

const malePic = 'https://i.pinimg.com/originals/95/49/ff/9549ff7f5600476511721eade4f4b91f.png';
const femalePic = 'https://graphic.club/wp-content/uploads/edd/2015/11/woman-avatar-4.png';

const men = Ape({
  maleUsers: arrayOf({
    firstName: name().male(),
    lastName: name().lastName(),
    age: age().adult(),
    image: malePic,
    gender: "male",
    date: date()
      .random()
      .startYearsAgo(5)
  }).repeat(10)
});

const women = Ape({
  femaleUsers: arrayOf({
    firstName: name().female(),
    lastName: name().lastName(),
    age: age().adult(),
    image: femalePic,
    gender: "female",
    date: date()
      .random()
      .startYearsAgo(5)
  }).repeat(10)
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
  const  fakeUsers  = await getFakeUsersFromServer();
  return fakeUsers.slice(0, amount);
}

export async function getRecommendedUsers(lookingFor) {
  const  fakeUsers  = await getFakeUsersFromServer();
  if (lookingFor !== 'Female' && lookingFor !== 'Male'){
    return fakeUsers;
  }
  return fakeUsers.filter(user => user.gender === lookingFor.toLowerCase());
}
