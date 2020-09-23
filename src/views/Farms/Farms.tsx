import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import styled from 'styled-components'
import griffin from '../../assets/img/griffin.png'
import background from '../../assets/img/background-01.png'

import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import Farm from '../Farm'

import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const [farmsType, setFarmsType] = useState('gfin')
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
                    subtitle="Earn GFIN tokens by staking Uniswap V2 LP Tokens."
                    title="Select Your Favorite Dishes"
                  />
                  <StyledTab>
                    <Button
                      onClick={() => setFarmsType('gfin')}
                      variant={farmsType === 'gfin' ? 'secondary' : 'default'}
                      size="md"
                      text="Uniswap LP Tokens"
                    />
                    <Spacer size="lg" />
                    <Button
                      onClick={() => setFarmsType('sushi')}
                      variant={farmsType === 'sushi' ? 'secondary' : 'default'}
                      size="md"
                      text="Sushiswap LP Tokens"
                    />
                  </StyledTab>
                  <FarmCards type={farmsType} />
                </Route>
                <Route path={`${path}/:type/:farmId`}>
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

const StyledTab = styled.div`
  width: '100%';
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 80px;
`

export default Farms
