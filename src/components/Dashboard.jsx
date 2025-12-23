import React from "react";
import Card from "./Card";

function Dashboard({ name, occ, nameChange }) {
  return (
    <Card 
      fullName={name} 
      occ={occ} 
      nameChange={nameChange} 
    />
  );
}

export default Dashboard;
