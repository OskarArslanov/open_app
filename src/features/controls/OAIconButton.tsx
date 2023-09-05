import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';
import { FC } from 'react';

const ButtonBase = styled(Button)({});
const OAIconButton: FC<ButtonProps> = (props) => {
  return <ButtonBase {...props} />;
};

export default OAIconButton;
