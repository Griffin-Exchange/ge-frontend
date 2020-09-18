import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import styled from 'styled-components'
import griffin from '../../assets/img/griffin.png'
import background from '../../assets/img/background-01.png'

import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <>
      <StyledBackground>
        <Switch>
          <Page>
            {!!account ? (
              <>
                <Route exact path={path}>
                  <PageHeader
                    icon={<img src={griffin} height="120" />}
                    subtitle="Earn GRFN tokens by staking Uniswap V2 LP Tokens."
                    title="Select Your Favorite Dishes"
                  />
                  <FarmCards />
                </Route>
                <Route path={`${path}/:farmId`}>
                  <Farm />
                </Route>
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
        </Switch>
      </StyledBackground>
    </>
  )
}

const StyledBackground = styled.div`
  background: url(${background});
  background-repeat: repeat-y;
  min-height: '100vh';
`

export default Farms
