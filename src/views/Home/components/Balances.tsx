import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Label from '../../../components/Label'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import SushiIcon from '../../../components/SushiIcon'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
      <Card>
        <CardContent>
          <StyledLabel>YOUR GRIFFIN BALANCES</StyledLabel>
          <LabelDivider />
          <BalanceContainer>
            {!!account ? <PreffixBalance>GFIN</PreffixBalance> : <></>}
            <Value
              value={!!account ? getBalanceNumber(sushiBalance) : 'Locked'}
            />
          </BalanceContainer>
        </CardContent>
        <Footnote>
          Pending harvest
          <FooterDivider />
          <FootnoteValue>
            <PendingRewards /> GFIN
          </FootnoteValue>
        </Footnote>
      </Card>
      <Spacer />
      <Card>
        <CardContent>
          <StyledLabel>TOTAL GRIFFIN SUPPLY</StyledLabel>
          <LabelDivider />
          <BalanceContainer>
            {totalSupply ? <PreffixBalance>GFIN</PreffixBalance> : <></>}
            <Value
              value={totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
            />
          </BalanceContainer>
        </CardContent>
        <Footnote>
          <span style={{ width: '120px' }}>New rewards per block</span>
          <FooterDivider />
          <FootnoteValue>1,000 GFIN</FootnoteValue>
        </Footnote>
      </Card>
    </StyledWrapper>
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.theme.color.whiteDoff};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FootnoteValue = styled.div`
  font-family: 'Bebas Neue', cursive;
  color: #ff6348;
  min-width: 50px;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`
const LabelDivider = styled.div`
  height: 1px;
  background-color: #fff;
  width: 70%;
  margin-top: -5px;
  margin-bottom: 13px;
`

const FooterDivider = styled.div`
  border-bottom: 1px #fff solid;
  width: 40%;
  margin-right: 5px;
`

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`

const PreffixBalance = styled.span`
  font-size: 22px;
  color: ${(props) => props.theme.color.whiteDoff};
  font-family: 'Bebas Neue', cursive;
  margin-bottom: 3px;
`

const StyledLabel = styled.label`
  padding-left: 10px;
  font-size: 32px;
  color: ${(props) => props.theme.color.whiteDoff};
  font-family: 'Bebas Neue', cursive;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
