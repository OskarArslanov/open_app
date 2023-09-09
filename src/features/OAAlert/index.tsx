import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { FC, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';

export interface OAAlertType {
  type: 'error' | 'info' | 'warning' | 'success';
  message?: string;
}
interface OAAlertProps {
  alert?: OAAlertType;
  onClose?: () => void;
}

const OAAlert: FC<OAAlertProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    props.onClose?.();
    setOpen(false);
  };

  useEffect(() => {
    setOpen(!!props.alert);
  }, [props.alert]);
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        severity={props.alert?.type}
        variant="filled"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ mb: 2 }}
      >
        {props.alert?.message}
      </Alert>
    </Snackbar>
  );
};

export default OAAlert;
