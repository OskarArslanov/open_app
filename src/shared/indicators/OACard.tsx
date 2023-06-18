'use client';

import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';

interface OACardProps {
  title: string;
  children: React.ReactNode;
}

const Card = styled.div`
  border: 1px solid #e4e4e7;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OACard: FC<OACardProps> = (props) => {
  return (
    <Card>
      <Title>
        <span>{props.title}</span>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Title>
      {props.children}
    </Card>
  );
};

export default OACard;
