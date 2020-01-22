import React, { useState, useEffect } from "react";
import "./userpage.css";

export function Pictures({ images, profilePic }) {
  const [currentPic, setCurrentPic] = useState("");
  function onClick(direction) {
    const currentIndex = images.indexOf(currentPic);
    setCurrentPic(
      images[(currentIndex + direction + images.length) % images.length]
    );
  }

  useEffect(() => {
    setCurrentPic(profilePic);
  }, [profilePic]);

  return (
    <div className="picscontainer">
      <button className="left" onClick={() => onClick(-1)} />
      <img className="userpic" src={currentPic} alt="user" />
      <button className="right" onClick={() => onClick(1)} />
    </div>
  );
}
