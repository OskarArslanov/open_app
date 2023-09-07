import styled from '@emotion/styled';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { FC } from 'react';

interface OAIconButtonProps extends IconButtonProps {
  bordered?: boolean;
}

const ButtonBase = styled(IconButton)<OAIconButtonProps>(
  {
    background: '#fff',
    color: 'var(--color-purple_dark)',
    '@media screen and (max-width: 768px)': {
      background: 'var(--color-purple_dark)',
      color: '#fff',
    },
  },
  (props) => ({
    border: props.bordered ? '2px solid var(--color-purple_dark)' : 'none',
  }),
);

const OAIconButton: FC<OAIconButtonProps> = (props) => {
  return <ButtonBase {...props} />;
};

export default OAIconButton;
