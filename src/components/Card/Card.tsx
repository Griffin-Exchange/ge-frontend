import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
  background: ${(props) => props.theme.color.whiteDoff};
  border-radius: 12px;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 1);
  padding: 18px;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default Card
