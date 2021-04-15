import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { List, ListItem } from "@material-ui/core";
import { TreeNode } from "../../model/TreeNode";

interface IProps {
  open: boolean;
  click: any;
  node: TreeNode;
}

const WinDialog = (props: IProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle id="simple-dialog-title">
        Acertei! Voce pensou em {props.node.name}
      </DialogTitle>
      <List>
        <ListItem autoFocus button onClick={props.click}>
          Continuar
        </ListItem>
      </List>
    </Dialog>
  );
};

export default WinDialog;
