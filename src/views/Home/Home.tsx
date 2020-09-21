import React from 'react'
import styled from 'styled-components'
import griffin from '../../assets/img/griffin.png'
import background from '../../assets/img/background-02.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

const Home: React.FC = () => {
  return (
    <>
      <StyledBackground />
      <Page>
        <PageHeader
          icon={<img src={griffin} height={200} />}
          title="GRIFFIN EXCHANGE"
          subtitle="Stake Uniswap LP tokens to claim your very own GRFN Tokens!"
        />

        <Container>
          <Balances />
        </Container>
        <Spacer size="lg" />
        <StyledInfo>
          🏆<b>Pro Tip</b>: GRFN-ETH UNI-V2 LP token pool yields TWICE more
          token rewards per block.
        </StyledInfo>
        <Spacer size="lg" />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
        </div>
      </Page>
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
