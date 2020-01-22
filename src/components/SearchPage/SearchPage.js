import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersCards } from "../UsersList/UsersCards";
import { getSearchResults } from "../../data/mockData";
import "./searchpage.css";

export function SearchPage() {
  const { name } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      setUsers(await getSearchResults(name));
    }
    fetchUsers();
  }, [name]);

  return <div className="searchpage">{disiplayResultsOrNotFound()}</div>;

  function disiplayResultsOrNotFound() {
    return users ? (
      <UsersCards title={"Search results:"} users={users} />
    ) : (
      <h2>No results found :(</h2>
    );
  }
}
