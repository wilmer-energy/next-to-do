"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import ModalComponent from './contactModal/ModalComponent';
import Form from './contactModal/Form';
import { ThemeProvider, createTheme } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733',
    }
  },
});
export default function ContactBtn() {
  const [open, setOpen] = React.useState(false);
  const form = React.useRef();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 5000);
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen} color="primary">Contact the website creator</Button>
      </ThemeProvider>
      <ModalComponent open={open} title="Contact the website creator" setOpen={setOpen} content={
        <Form setOpen={setOpen} />
      } />
    </div>
  );
}
