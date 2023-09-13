import { motion } from 'framer-motion';
import { CSSProperties, FC, ReactNode } from 'react';
import { styled } from 'styled-components';

const FlexContainer = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
});

interface AnimateContainerProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
export const AnimateContainer: FC<AnimateContainerProps> = (props) => {
  return (
    <FlexContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </FlexContainer>
  );
};
