import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 200px;
  line-height: 200px;
  text-align: center;
`
// font-family: 'Kaushan Script', sans-serif;

const StyledTitle = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.theme.color.whiteDoff};
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0.03em;
  margin: 0;
  padding: 0;
  margin-top: 10px;
`

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.color.whiteDoff};
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
