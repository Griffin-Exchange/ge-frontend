import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'

import styled, { keyframes } from 'styled-components'
import CardIcon from '../../../components/CardIcon'
import Button from '../../../components/Button'
import CardContent from '../../../components/CardContent'
import Loader from '../../../components/Loader'

import useTokenBalance from '../../../hooks/useTokenBalance'
import { getBalanceNumber } from '../../../utils/formatBalance'

import griffin from '../../../assets/img/griffin.png'
import { fetchData } from '../../../utils'

import { boostListToken } from '../../../sushi/lib/constants'

const TopUpCards: React.FC = () => {
  const wallet = useWallet()
  const [amount, setAmount] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   boostListToken.map((i) => {
  //     if (i.id === 'eth') {
  //       console.log(i.name, ':', wallet.balance)
  //     } else {
  //       console.log(
  //         i.name,
  //         ':',
  //         getBalanceNumber(
  //           useTokenBalance('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
  //         ),
  //       )
  //     }
  //   })
  // }, [])

  const handlePay = (input: any) => {
    setIsLoading(true)
    console.log('input', input)
    fetchData('/invoices', 'POST', { amount: input })
      .then((val) => {
        setAmount(null)
        setIsLoading(false)
        window.open(val.data.invoice_url)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err)
      })
  }

  return (
    <Container>
      <StyledCards>
        <TopUpCardContainer
          wallet={wallet.account || '0x01010101010'}
          amount={amount}
          setAmount={(e: any) => setAmount(e)}
          isLoading={isLoading}
          handlePay={handlePay}
        />
      </StyledCards>
      {boostListToken.map((i) => {
        if (i.name === 'eth') {
          return (
            <div>
              {console.log(wallet.account, ':', wallet.balance)}
              {i.name}: {wallet.balance}
            </div>
          )
        } else {
          return (
            <ComponentContainer addressToken={i.tokenAddress} name={i.name} />
          )
        }
      })}
    </Container>
  )
}

interface ComponentProps {
  addressToken: string
  name: String
}

const ComponentContainer: React.FC<ComponentProps> = ({
  addressToken,
  name,
}) => {
  return (
    <div>
      {name} : {getBalanceNumber(useTokenBalance(addressToken))}
    </div>
  )
}

interface TopUpCardProps {
  wallet: String
  amount: any
  setAmount: any
  isLoading: Boolean
  handlePay: Function
}

const TopUpCardContainer: React.FC<TopUpCardProps> = ({
  wallet,
  amount,
  setAmount,
  isLoading,
  handlePay,
}) => {
  return (
    <StyledCardWrapper>
      <StyledCardAccent />
      <CardFarm>
        <CardContent>
          <CardIcon>
            <img src={griffin} height="45" alt="griffin-logo" />
          </CardIcon>
          <StyledContent>
            <StyledTitle>Top Up and get more Griffin Token</StyledTitle>
            <StyledSpacer />
            <StyledInsight>
              <span style={{ color: '#fc8a58', fontWeight: 'bold' }}>USD</span>
              <input
                value={amount}
                placeholder="0"
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  direction: 'rtl',
                  background: 'transparent',
                  outline: 'none',
                  border: 0,
                  color: '#fff',
                  width: 'inherit',
                }}
              />
            </StyledInsight>
            <StyledInsight>
              <span style={{ color: '#fc8a58', fontWeight: 'bold' }}>
                ADDRESS
              </span>
              <span>{wallet}</span>
            </StyledInsight>
            <StyledSpacer />
            {!isLoading ? (
              <Button onClick={() => handlePay(amount)} text="TOP UP NOW!" />
            ) : (
              <Loader text="Loading" />
            )}
          </StyledContent>
        </CardContent>
      </CardFarm>
    </StyledCardWrapper>
  )
}

const Container = styled.div`
  flex: 1;
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
`

const CardFarm = styled.div`
  background: ${(props) => props.theme.color.blackDoff};
  border-radius: 12px;
  box-shadow: 17px 17px 34px #1b1b1b, -17px -17px 34px #353535;
  display: flex;
  flex: 1;
  flex-direction: column;
  z-index: 0;
`

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

const RainbowLight = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -10px;
  right: -10px;
  bottom: -10px;
  left: -10px;
  z-index: 0;
`

const StyledCards = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((1900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledInsight = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 8px;
  background: #282828;
  color: #fff;
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 13px;
  box-shadow: inset 3px 3px 7px 0 #1b1b1b, inset -6px -6px 10px 0 #353535;
  text-align: center;
  padding: 10px 15px;
  letter-spacing: 3px;
`

export default TopUpCards
