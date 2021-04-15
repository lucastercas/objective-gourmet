import {
  Box,
  Button,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { useReducer } from "react";
import { State } from "../../model/State";
import { TreeNode } from "../../model/TreeNode";
import { reducer } from "../../provider/reducer";
import LoseDialog from "../LoseDialog/LoseDialog";
import WinDialog from "../WinDialog/WinDialog";

function init(): State {
  const rootNode = new TreeNode("massa", false);

  const leftNode = new TreeNode("Lasanha", true);
  leftNode.setParent(rootNode);
  rootNode.setLeft(leftNode);

  const rightNode = new TreeNode("Bolo de Chocolate", true);
  rightNode.setParent(rootNode);
  rootNode.setRight(rightNode);

  return {
    currentNode: rootNode,
    rootNode: rootNode,
    win: false,
    lose: false,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        justifyContent: "center",
      },
    },
  })
);

const Question = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box color="text.primary">Pense em um prato que gosta!</Box>
      <Box>O prato que voce pensou é {state.currentNode.name}?</Box>
      <div className={classes.root}>
        <Button
          onClick={() => dispatch({ type: "yes" })}
          variant="contained"
          color="primary"
        >
          Sim
        </Button>
        <Button
          onClick={() => dispatch({ type: "no" })}
          variant="contained"
          color="secondary"
        >
          Não
        </Button>
      </div>

      <WinDialog
        open={state.win}
        click={() => dispatch({ type: "restart" })}
        node={state.currentNode}
      />
      <LoseDialog open={state.lose} click={dispatch} />
    </Container>
  );
};

export default Question;
