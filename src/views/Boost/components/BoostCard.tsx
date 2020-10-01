import React, { useState, useEffect } from 'react'
import { useWallet } from 'use-wallet'
import { debounce } from 'debounce'
import BigNumber from 'bignumber.js'

import { getBalance } from '../../../utils/erc20'

import styled, { keyframes } from 'styled-components'
import CardIcon from '../../../components/CardIcon'
import Button from '../../../components/Button'
import CardContent from '../../../components/CardContent'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'

import useTokenBalance from '../../../hooks/useTokenBalance'
import { getBalanceNumber } from '../../../utils/formatBalance'

import griffin from '../../../assets/img/griffin.png'

import { fetchData } from '../../../utils'
import { boostListToken } from '../../../sushi/lib/constants'

const TopUpCards: React.FC = () => {
  const wallet: any = useWallet()
  const [amount, setAmount] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [optionCurrency, setOptionCurrency] = useState(boostListToken)
  const [step, setStep] = useState(true)

  useEffect(() => {
    setAmountEditor()
  }, [wallet])

  const setAmountEditor = () => {
    console.log(wallet)
    let newArr = [...optionCurrency]
    newArr.forEach(async (data: any) => {
      if (data.name === 'ETH') {
        data.defaultWallet = wallet.balance / 10000000000000000000
        data.walletEditor = wallet.balance / 10000000000000000000
      } else {
        // change walletEditor value to amount actually wallet address
        let _wallet = await getBalance(
          wallet.ethereum,
          data.tokenAddress,
          wallet.account,
        )
        data.defaultWallet = getBalanceNumber(new BigNumber(_wallet))
        data.walletEditor = getBalanceNumber(new BigNumber(_wallet))
      }
      data.transferEditor = 0
      // change stateChannel value to amount actually state Channel
      data.stateChannelEditor = 0
    })
    console.log(newArr)
    setOptionCurrency(newArr)
  }

  const handlePay = (input: any) => {
    const optionArray = optionCurrency.filter((d) => d.status === true)

    if (step && optionArray.length > 0) {
      setStep(false)
    } else {
      // setIsLoading(true)
      // console.log('input', input)
      // fetchData('/invoices', 'POST', { amount: input })
      //   .then((val) => {
      //     setAmount(null)
      //     setIsLoading(false)
      //     window.open(val.data.invoice_url)
      //   })
      //   .catch((err) => {
      //     setIsLoading(false)
      //     alert(err)
      //   })
    }
  }

  const handleOptionCurrencyChanged = (index: any) => {
    let newArr = [...optionCurrency]
    newArr[index].status = !newArr[index].status

    setOptionCurrency(newArr)
  }

  const handleTransferChanged = (total: any, index: any) => {
    let newArr = [...optionCurrency]
    newArr[index].transferEditor = total
    let _total = newArr[index].defaultWallet - parseFloat(total)
    newArr[index].walletEditor =
      total > 0
        ? _total > 0
          ? _total
          : newArr[index].defaultWallet
        : newArr[index].defaultWallet
    newArr[index].stateChannelEditor = total

    setOptionCurrency(newArr)
  }

  return (
    <Container>
      <StyledCards>
        <TopUpCardContainer
          wallet={wallet || '0x01010101010'}
          amount={amount}
          setAmount={(e: any) => setAmount(e)}
          isLoading={isLoading}
          handlePay={handlePay}
          optionCurrency={optionCurrency}
          handleOptionCurrency={handleOptionCurrencyChanged}
          step={step}
          setStep={setStep}
          handleTransferChanged={handleTransferChanged}
        />
      </StyledCards>
    </Container>
  )
}

interface TopUpCardProps {
  wallet: any
  amount: any
  setAmount: any
  isLoading: Boolean
  handlePay: Function
  optionCurrency: any
  handleOptionCurrency: Function
  step: Boolean
  setStep: Function
  handleTransferChanged: Function
}

const TopUpCardContainer: React.FC<TopUpCardProps> = ({
  wallet,
  amount,
  setAmount,
  isLoading,
  handlePay,
  optionCurrency,
  handleOptionCurrency,
  step,
  setStep,
  handleTransferChanged,
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
            <StyledTitle>
              Boost Performance By Moving
              <br />
              Your Token To State Channel
            </StyledTitle>
            <StyledSpacer />
            <StyledInsight>
              <span style={{ color: '#fc8a58', fontWeight: 'bold' }}>
                ADDRESS
              </span>
              <span>{wallet.account}</span>
            </StyledInsight>
            <Spacer />
            {!step ? (
              <RowSpaceBetween>
                <SpanTitle>Wallet</SpanTitle>
                <SpanTitle>State Channel</SpanTitle>
              </RowSpaceBetween>
            ) : null}
            {!step
              ? optionCurrency.map((data: any, index: any) =>
                  data.status === true ? (
                    data.name === 'ETH' ? (
                      <RowSpaceBetween key={index}>
                        <SpanRowName>{data.name}</SpanRowName>
                        <StyledFinance>
                          <InputRowStyle
                            value={data.walletEditor.toFixed(4)}
                            placeholder="0"
                            readOnly
                          />
                        </StyledFinance>
                        <SpanRowSymbol>&gt;</SpanRowSymbol>
                        <StyledFinance>
                          <InputRowStyle
                            value={data.transferEditor}
                            placeholder="0"
                            onChange={(e) =>
                              handleTransferChanged(e.target.value, index)
                            }
                          />
                        </StyledFinance>
                        <SpanRowSymbol>&gt;</SpanRowSymbol>
                        <StyledFinance>
                          {/* change value amount state channel + amount */}
                          <InputRowStyle
                            value={data.stateChannelEditor}
                            placeholder="0"
                            readOnly
                          />
                        </StyledFinance>
                      </RowSpaceBetween>
                    ) : (
                      <RowInput
                        key={index}
                        index={index}
                        data={data}
                        addressToken={data.tokenAddress}
                        amount={amount}
                        setAmount={handleTransferChanged}
                      />
                    )
                  ) : null,
                )
              : null}
            <Spacer />
            {step ? (
              <WrapContainer>
                {optionCurrency.map((data: any, index: any) => (
                  <ButtonCurrency
                    key={index}
                    style={
                      data.status
                        ? { background: '#fc8a58', color: '#282828' }
                        : {}
                    }
                    onClick={() => handleOptionCurrency(index)}
                  >
                    {data.name}
                  </ButtonCurrency>
                ))}
              </WrapContainer>
            ) : null}
            <StyledSpacer />
            {!isLoading ? (
              <>
                {!step ? (
                  <>
                    <Button onClick={() => setStep(true)} text="CANCEL" />
                    <Spacer />
                  </>
                ) : null}
                <Button
                  onClick={() => handlePay(amount)}
                  text={step ? 'NEXT' : 'EXECUTE'}
                />
              </>
            ) : (
              <Loader text="Loading" />
            )}
          </StyledContent>
        </CardContent>
      </CardFarm>
    </StyledCardWrapper>
  )
}

interface RowInputProps {
  addressToken: string
  index: number
  data: any
  amount: number
  setAmount: Function
}

const RowInput: React.FC<RowInputProps> = ({
  addressToken,
  index,
  data,
  amount,
  setAmount,
}) => {
  return (
    <RowSpaceBetween>
      <SpanRowName>{data.name}</SpanRowName>
      <StyledFinance>
        <InputRowStyle
          value={data.walletEditor.toFixed(4)}
          placeholder="0"
          readOnly
        />
      </StyledFinance>
      <SpanRowSymbol>&gt;</SpanRowSymbol>
      <StyledFinance>
        <InputRowStyle
          value={data.transferEditor}
          placeholder="0"
          onChange={(e) => setAmount(e.target.value, index)}
        />
      </StyledFinance>
      <SpanRowSymbol>&gt;</SpanRowSymbol>
      <StyledFinance>
        {/* change value amount state channel + amount */}
        <InputRowStyle
          value={data.stateChannelEditor}
          placeholder="0"
          readOnly
        />
      </StyledFinance>
    </RowSpaceBetween>
  )
}

const Container = styled.div`
  flex: 1;
  align-items: 'center';
  display: 'flex';
  justify-content: 'center';
`

const RowSpaceBetween = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Row = styled.div`
  line-height: 32px;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const WrapContainer = styled.div`
  width: 600px;
  text-align: center;
  vertical-align: middle;
  letter-spacing: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ButtonCurrency = styled.div`
  box-shadow: 4px 4px 8px #1b1b1b, -8px -8px 16px #353535;
  background: ${(props) => props.theme.color.blackDoff};
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.theme.color.whiteDoff};
  border-radius: 12px;
  line-height: 32px;
  font-size: 18px;
  text-align: center;
  vertical-align: middle;
  padding: 10px 15px 5px 20px;
  &:hover {
    background-color: #1b1b1b;
  }
  cursor: pointer;
  margin: 10px;
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
  text-align: center;
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
  width: 100%;
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
  text-align: center;
  padding: 10px 15px;
  letter-spacing: 3px;
  box-shadow: inset 3px 3px 7px 0 #1b1b1b, inset -6px -6px 10px 0 #353535;
`

const StyledFinance = styled.div`
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
  padding: 10px 12px;
  text-align: center;
`

const SpanTitle = styled.span`
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 10px;
`

const SpanRowName = styled.span`
  color: #fc8a58;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 10px;
`

const SpanRowSymbol = styled.span`
  color: #fc8a58;
  font-weight: bold;
  margin: 10px 15px 0px 15px;
`

const InputRowStyle = styled.input`
  direction: rtl;
  background: transparent;
  outline: none;
  border: 0;
  color: #fff;
  width: inherit;
`

export default TopUpCards
