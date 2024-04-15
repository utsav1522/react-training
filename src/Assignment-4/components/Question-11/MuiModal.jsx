/**
 * Design a modal dialog component using Material-UI's Dialog component.
 * Use it to display additional information or capture user input within your app.
 */

import { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Modal,
  Box,
  Typography,
} from "@mui/material";

const MuiModal = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <Stack direction={"row"} spacing={2}>
        <TextField
          value={userInput}
          label="Modal Input"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Show Modal
        </Button>
      </Stack>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5">
            {userInput}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default MuiModal;
