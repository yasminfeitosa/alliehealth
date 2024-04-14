import { Box, Button, Typography } from "@mui/material";
import { useUserContext } from "../../contexts/userContext";
import { useState } from "react";
import CreateUserModal from "../create";

const UserDetails = () => {
  const user = useUserContext();
  const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          gap: 1,
          marginBottom: 3,
        }}
      >
        <Typography variant="h4"> User Details </Typography>
        <Typography variant="body1"> Name: {user.user?.first_name} {user.user?.last_name}</Typography>
        <Typography variant="body1"> Email: {user.user?.email} </Typography>
        <Typography variant="body1"> Birthdate: {user.user?.birthdate ? user.user?.birthdate : 'Not informed'} </Typography>

        <Button variant="contained" onClick={() => setIsUpdateUserOpen(true)}>
          Edit User
        </Button>
      </Box>
      <CreateUserModal
        open={isUpdateUserOpen}
        handleClose={() => {
          // refetch();
          setIsUpdateUserOpen(!isUpdateUserOpen)}
        }
        initialValues={user.user}
      />
    </>
  );
}

export default UserDetails;