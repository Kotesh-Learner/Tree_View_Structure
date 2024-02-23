import React from "react";
import "./styles.css";
import ArrayList from "./Array";

const Index = ({ userMenu = [] }) => {
  return (
    <div className="profile-container">
      <ArrayList list={userMenu} />
    </div>
  );
};

export default Index;
