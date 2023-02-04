import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IUserData } from "../../Interface";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { IUserContext, UserContext } from "../../pages/users-list/UsersList";
import { CustomDialog, CustomDialogTitle } from "../Dialog/CustomDialog";

interface IDeleteProps {
  id: string;
}

const Delete = ({ id }: IDeleteProps) => {
  const [open, setOpen] = React.useState(false);
  const { users, setUsers } = useContext(UserContext) as IUserContext;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const index = users.findIndex((user: IUserData) => user.id === id);
    users.splice(index, 1);
    setUsers([...users]);
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <CustomDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Delete User
        </CustomDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Are you sure you want to delete the user ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button autoFocus onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </CustomDialog>
    </>
  );
};

export default Delete;
