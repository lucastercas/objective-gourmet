import React, { useState } from "react";
import {
  Button,
  Container,
  createStyles,
  Dialog,
  DialogTitle,
  makeStyles,
  TextField,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      form: {
        padding: "5px",
      },
    },
    buttonDiv: {
      display: "grid",
    },
  })
);
interface IProps {
  open: boolean;
  click: any;
}

const LoseDialog = (props: IProps) => {
  const classes = useStyles();

  const [food, setFood] = useState({ name: "", trait: "" });
  const [errors, setErrors] = useState({ field: "", error: "" });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (food.name.length <= 0) {
      setErrors({ field: "name", error: "Não pode ser vazio" });
    } else if (food.trait.length <= 0) {
      setErrors({ field: "trait", error: "Não pode ser vazio" });
    } else {
      const newFood = food;
      setFood({ name: "", trait: "" });
      props.click({ type: "restart", payload: newFood });
    }
  };

  const handleChange = (event: any) => {
    event.target.id === "name"
      ? setFood({ ...food, name: event.target.value })
      : setFood({ ...food, trait: event.target.value });
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>Poxa! Em qual você pensou então?</DialogTitle>
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="on">
        <Container>
          <TextField
            variant="outlined"
            label="Nome"
            id="name"
            value={food.name}
            onChange={handleChange}
            error={errors.field === "name"}
            helperText={errors.field === "name" ? errors.error : ""}
          />
        </Container>
        <Container>
          <TextField
            variant="outlined"
            label="Traço"
            id="trait"
            value={food.trait}
            onChange={handleChange}
            error={errors.field === "trait"}
            helperText={errors.field === "trait" ? errors.error : ""}
          />
        </Container>
        <Container className={classes.buttonDiv}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            value="Continuar"
          >
            Continuar
          </Button>
        </Container>
      </form>
    </Dialog>
  );
};

export default LoseDialog;
