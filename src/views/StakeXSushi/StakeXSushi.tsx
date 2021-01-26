import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import Spacer from '../../components/Spacer'
import useSushi from '../../hooks/useSushi'
import { getContract } from '../../utils/erc20'
import UnstakeXSushi from './components/UnstakeXSushi'
import StakeSushi from './components/StakeSushi'

import { contractAddresses } from '../../sushi/lib/constants'
import { getXSushiSupply } from '../../sushi/utils'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from '../../utils/formatBalance'

const StakeXSushi: React.FC = () => {
  const { tokenAddress } = {
    tokenAddress: contractAddresses.xSushi[1],
  }

  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  const sushi = useSushi()
  const { ethereum } = useWallet()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getXSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  const lpContract = useMemo(() => {
    // debugger
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  return (
    <>
      <StyledFarm>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <UnstakeXSushi lpContract={lpContract} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <StakeSushi />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <StyledInfo>
              ℹ️️ You will earn a portion of the swaps fees (Emerald) based on the amount
              of Agate held relative the weight of the migrating. Agate can be
              minted by migrating GIGA. To redeem GIGA staked plus swap fees (Emerald)
              convert Agate back to GIGA.{' '}
              {totalSupply
                ? `There are currently ${getBalanceNumber(
                    totalSupply,
                  )} Agate in the whole pool.`
                : ''}
            </StyledInfo>
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
      </StyledFarm>
    </>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.whiteDoff};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default StakeXSushi
