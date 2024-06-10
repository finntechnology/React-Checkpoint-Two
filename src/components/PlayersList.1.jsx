import React from "react";
import Player from "./Player";
import players from "../players";

export const PlayersList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      //mapping through array of players//
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};
