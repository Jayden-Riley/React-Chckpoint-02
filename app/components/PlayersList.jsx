import { players } from "../data/players";
import Player from "./Player";

export default function PlayersList() {
  return (
    <div className="grid grid-cols-3 gap-y-10">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}
