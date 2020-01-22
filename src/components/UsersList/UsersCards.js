import React from "react";
import {Card} from './Card';
import './card.css';

export function UsersCards({ users, title }) {
  return (
    <div className="userscards">
      <h3>{title}</h3>
      {users.map((user,index) => <Card key={index} user={user}/>)}
    </div>
  );
}
