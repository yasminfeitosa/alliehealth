import { Box, Modal } from "@mui/material";
import React from "react";
import CreateForm from "./CreateForm";
import { User } from "../../types/User";

type Props = {
  open: boolean;
  handleClose: () => void;
  initialValues?: User | null | undefined;
};

const CreateUserModal = ({ open, handleClose, initialValues }: Props) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <CreateForm onSubmit={handleClose} initialValues={initialValues}/>
      </Box>
    </Modal>
  );
};

export default CreateUserModal;
