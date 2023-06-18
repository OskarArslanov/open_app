import { FC } from 'react';
import OAPaper from '@/shared/indicators/OAPaper';
import styled from 'styled-components';

interface OAInfoCardProps {
  title: string;
  description: string;
}

const Title = styled.span`
  font-weight: var(--font-weigth_xl);
`;

const Description = styled.span`
  color: var(--text-color_secondary);
`;

const OAInfoCard: FC<OAInfoCardProps> = (props) => {
  return (
    <OAPaper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </OAPaper>
  );
};

export default OAInfoCard;
