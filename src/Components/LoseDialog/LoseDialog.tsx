import React, { useState } from "react";
import { Dialog, DialogTitle } from "@material-ui/core";

interface IProps {
  open: boolean;
  click: any;
}

const LoseDialog = (props: IProps) => {
  const [food, setFood] = useState({ name: "", trait: "" });

  const handleSubmit = (event: any) => {
    event.preventDefault()
    props.click({ type: "restart", payload: food });
  };

  const handleChange = (event: any) => {
    event.target.id === "name"
      ? setFood({ ...food, name: event.target.value })
      : setFood({ ...food, trait: event.target.value });
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>Poxa! Em qual voce pensou entao?</DialogTitle>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Nome da comida:</span>
          <input
            type="text"
            id="name"
            value={food.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Um traço da comida:</span>
          <input
            type="text"
            id="trait"
            value={food.trait}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Continuar" />
      </form>
    </Dialog>
  );
};

export default LoseDialog;
