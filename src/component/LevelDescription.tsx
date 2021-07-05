import { Modal, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import Puzzles from "../Puzzles";

// Automatically opens when description is updated.
export default function TurnDescription({turn, onDismiss} : {turn: number, onDismiss: any}) {
  const [lastAcknowledgedTurn, setLastAcknowledgedTurn] = useState(turn);
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (turn !== lastAcknowledgedTurn) {
      setShow(true);
    }
  }, [lastAcknowledgedTurn, turn]);
  const onClose = () => {
    setShow(false);
    setLastAcknowledgedTurn(turn);
    onDismiss();
  };
  const puzzle = Puzzles[turn - 1];
  return <Modal open={show} onClose={onClose} onClick={onClose}>
    <Paper variant="outlined" className="event-modal">
      <div className="event-body">
        <h1>{puzzle.title}</h1>
        {puzzle.description.map((descriptionLine, i) => <p key={i}>{descriptionLine}</p>)}
        <p><em>Press Escape or click/tap anywhere to continue...</em></p>
      </div>
    </Paper>
  </Modal>;
}