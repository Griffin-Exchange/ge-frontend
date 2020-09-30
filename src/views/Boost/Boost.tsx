import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from '../../assets/img/background-01.png'
import { useWallet } from 'use-wallet'

import Button from '../../components/Button'
import Page from '../../components/Page'
import WalletProviderModal from '../../components/WalletProviderModal'
import BoostCard from './components/BoostCard'

import useModal from '../../hooks/useModal'

const Farm: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <StyledBackground />
      <Page>
        {!!account ? (
          <BoostCard />
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

export default Farm
