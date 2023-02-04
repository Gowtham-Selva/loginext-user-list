import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CustomInputField from "../CustomFields/CustomInputField";
import { IUserData } from "../../Interface";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { IUserContext, UserContext } from "../../pages/users-list/UsersList";
import { CustomDialog, CustomDialogTitle } from "../Dialog/CustomDialog";

interface IEditButtonProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const EditButton = ({ id, name, email, phone, website }: IEditButtonProps) => {
  const [open, setOpen] = React.useState(false);
  const [editState, setEditState] = useState({ name, email, phone, website });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditState({ ...editState, [name]: value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (isEdited = false) => {
    setOpen(false);
    if (!isEdited) {
      setTimeout(() => {
        setEditState({ name, email, phone, website });
      }, 100);
    }
  };

  const { users, setUsers } = useContext(UserContext) as IUserContext;

  const handleEdit = () => {
    const index = users.findIndex((user: IUserData) => user.id === id);
    users[index] = { ...users[index], ...editState };
    setUsers([...users]);
    handleClose(true);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <CustomDialog open={open} onClose={() => handleClose()}>
        <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit User
        </CustomDialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off" sx={{ px: 5 }}>
            <Stack spacing={2.5}>
              <CustomInputField
                fullWidth
                required
                id="outlined-required"
                value={editState.name}
                label="Name"
                name="name"
                onChange={handleChange}
              />
              <CustomInputField
                fullWidth
                required
                id="outlined-required"
                value={editState.email}
                label="Email"
                name="email"
                onChange={handleChange}
              />
              <CustomInputField
                fullWidth
                required
                id="outlined-required"
                value={editState.phone}
                label="Phone"
                name="phone"
                onChange={handleChange}
              />
              <CustomInputField
                fullWidth
                required
                id="outlined-required"
                value={editState.website}
                label="Website"
                name="website"
                onChange={handleChange}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack direction="row" spacing={2} sx={{ px: 5, py: 1 }}>
            <Button onClick={() => handleClose()}>Cancel</Button>
            <Button onClick={handleEdit}>Update</Button>
          </Stack>
        </DialogActions>
      </CustomDialog>
    </>
  );
};

export default EditButton;
