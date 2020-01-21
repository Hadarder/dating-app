import React, { useState, useEffect } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { UsersCards } from "./UsersCards";
import {
  getRecentlyJoineUsers,
  getRecommendedUsers
} from "../../data/mockData";

export function HomePage() {
  const user = useSelector(({ user }) => user);
  const [recentlyUsers, setRecentlyUsers] = useState([]);
  const [recommendedUsers, setRecommendedUsers] = useState([]);

  useEffect(() => {
    async function fetchFakeUsers() {
      setRecentlyUsers(await getRecentlyJoineUsers(10));
      setRecommendedUsers(await getRecommendedUsers(user.lookingFor));
    }
    user && fetchFakeUsers();
  }, [user]);

  function displayHomepageIfLoggedIn({ username }) {
    if (username.length === 0) {
      return <h2>OMG, it’s the best dating app EVER</h2>;
    }
    return (
      <div className="container">
        <UsersCards title="Recommended for you:" users={recommendedUsers} />
        <UsersCards title="Recently joined:" users={recentlyUsers} />
      </div>
    );
  }
  return <div className="homepage">{displayHomepageIfLoggedIn(user)}</div>;
}
