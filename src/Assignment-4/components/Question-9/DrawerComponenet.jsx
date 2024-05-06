import { IconButton, Drawer, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const DrawerComponent = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        color="inherit"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Side Panel
          </Typography>
        </Box>
        <div
          style={{
            padding: "20px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/assignment-4/question-9/contact");
            }}
          >
            Go to Contacts
          </Button>
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/assignment-4/question-9/innovations");
            }}
          >
            Go to Innovations
          </Button>
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/assignment-4/question-9/settings");
            }}
          >
            Go to Settings
          </Button>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerComponent;
