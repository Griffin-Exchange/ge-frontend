import React from 'react'
import styled from 'styled-components'
import home from '../../assets/img/home.png'
import background from '../../assets/img/background-03.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import CountdownUI from './components/CountdownUI'

const Home: React.FC = () => {
  return (
    <>
      <StyledBackground>
      <Page>
        <Spacer size="lg" />
        <PageHeader
          icon={<img src={home} height={325} />}
          subtitle="Gigavis are Griffins; legendary creature with the body, tail, and back legs of a lion; the head and wings of an eagle with talons as its front feet"
          title="FAST & CHEAP AMM DEX on ETHEREUM L-2 !"
        />

        <CountdownUI />
        <Spacer size="lg" />
        <Container>
          <Balances />
        </Container>
        <Spacer size="lg" />
        <Spacer size="lg" />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <Button text="See the Menu" to="/farms" variant="secondary" />
        </div>
        <Spacer size="lg" />
      </Page>
      </StyledBackground>
    </>
  )
}

const StyledBackground = styled.div`
  background: url(${background}) no-repeat;
  background-size: cover;
  height: '100%';
  width: '100%';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.whiteDoff};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.whiteDoff};
  }
`

export default Home
