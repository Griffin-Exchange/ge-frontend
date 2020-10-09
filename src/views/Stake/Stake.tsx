import React, { useEffect, useMemo } from 'react'
import styled from 'styled-components'
import griffin from '../../assets/img/griffin.png'
import background from '../../assets/img/background-03.png'

import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import Page from '../../components/Page'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import { getContract } from '../../utils/erc20'
import { supportedPools } from '../../sushi/lib/constants'

import Stake from './components/Stake'
import Harvest from './components/Harvest'

const Farm: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, supportedPools[0].lpAddresses[1])
  }, [ethereum, supportedPools[0].lpAddresses[1]])

  return (
    <>
      <StyledBackground />
      <Page>
        {!!account ? (
          <>
            <PageHeader
              icon={<img src={griffin} height="120" />}
              title="Stake GFIN, Earn AGATE & Emerald"
              subtitle="Griffins lay AGATE eggs in their GOLDEN NESTS, and sometimes Emerald (0.05% fees when swap occur)"
            />
            {/* <FarmCards /> */}
            {/* <div>TBD</div> */}
            <StyledCardsWrapper>
              <StyledCardWrapper>
                <Harvest
                  pid={supportedPools[0].pid}
                  icon={supportedPools[0].icon}
                  tokenSymbol="GFIN"
                />
              </StyledCardWrapper>
              <Spacer />
              <StyledCardWrapper>
                <Stake
                  tokenContract={lpContract}
                  pid={supportedPools[0].pid}
                  tokenName="GFIN"
                />
              </StyledCardWrapper>
            </StyledCardsWrapper>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
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
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default Farm
