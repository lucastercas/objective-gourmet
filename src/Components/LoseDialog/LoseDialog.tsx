import { Dialog, DialogTitle, List, ListItem } from "@material-ui/core";

interface IProps {
  open: boolean;
}

const LoseDialog = (props: IProps) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle>Poxa! Em qual voce pensou entao?</DialogTitle>
      <List>
        <ListItem autoFocus button>
          Continuar
        </ListItem>
      </List>
    </Dialog>
  );
};
