import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByName } from "../../data/mockData";
import { Pictures } from "./Pictures";
import "./userpage.css";

export function UserPage() {
  const { name } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    async function fetchUser() {
      setUser(await getUserByName(name));
    }

    fetchUser();
  }, [name]);

  function displayHimOrHer(gender) {
    return gender === "female" ? "her" : "him";
  }

  return (
    <div className="userpage">
      <div className="userContainer">
        <Pictures images={user.images} profilePic={user.profilePic} />
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <h3>{user.age}</h3>
        <button className="like">
          {"i like " + displayHimOrHer(user.gender)}
          <span className="heart">❤</span>
        </button>
        <div className="checkbox">
          <input type="checkbox" />
          is a creep
        </div>
      </div>
    </div>
  );
}
