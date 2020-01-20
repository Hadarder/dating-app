import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAction } from "../../redux/useAction";
import { userActions } from "../../redux/user";
import { updateUserProfile } from "../../data/dataManager";
import "./profilepage.css";

export function ProfilePage() {

  const user = useSelector(({ user }) => user);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [lookingFor, seLookingFor] = useState(user.lookingFor);
  const [gender, setGender] = useState(user.gender);

  const saveUser = useAction(userActions.saveUser);

  async function onSubmit() {
    const updatedUser = await updateUserProfile(
      user.username,
      user.password,
      name,
      age,
      gender,
      lookingFor
    );
    saveUser(updatedUser);
  }

  return (
    <div className="profilepage">
      <form
        className="profileform"
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="profileinput">
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="profileinput">
          Age:
          <input
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div className="profileinput">
          Gender:
          <select value={gender} onChange={e => setGender(e.target.value)}>
            <option></option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="profileinput">
          Looking for:
          <select
            value={lookingFor}
            onChange={e => seLookingFor(e.target.value)}
          >
            <option></option>
            <option>Men</option>
            <option>Women</option>
            <option>Men & Women</option>
          </select>
        </div>
        <button className="savebutton">Save</button>
      </form>
    </div>
  );
}
