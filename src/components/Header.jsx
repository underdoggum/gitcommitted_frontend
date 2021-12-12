import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Box, Typography } from "@mui/material";


const Header = props => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const button = {
    position: "absolute",
    top: "0",
    right: "0"
  };

  const box = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const h1 = {
    textAlign: "center",
    margin: "10px",
    fontWeight: "bold",
    marginBottom: "0",
    marginTop: "1rem"
  };

  return(
    <header>
      <Link style={{textDecoration: "none", color: "inherit"}} to="/">
        <h1 style={h1}>Git Committed</h1>
        <h4 style={{marginTop: "0", marginBottom: "1rem"}}>Stay on track. Land that dream job.</h4>
      </Link>

      <Button style={button} onClick={handleOpen}>Useful Tips</Button>
      <Modal
        open={open}
        onClose={handleClose}
        area-labelledby="modal-modal-title"
        area-describedby="modal-modal-description"
      >
        <Box sx={box}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ul>
              <li>Take a 10-min break after every hour</li>
              <li>Stretch often (hamstrings, wrists/forearms, neck, chest, abs)</li>
              <li>Drink <em>plenty</em> of water</li>
              <li>Remember: any progress is good progress</li>

            </ul>
          </Typography>
        </Box>
      </Modal>
    </header>
  )
}


export default Header;
