import { Box } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const MessageContainer = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      {children}
    </Box>
  );
};

export default MessageContainer;
