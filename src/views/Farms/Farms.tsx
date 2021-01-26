import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

import styled from 'styled-components'
import farms from '../../assets/img/farms.png'
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
  const [farmsType, setFarmsType] = useState('giga')
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
                    icon={<img src={farms} height="175" />}
                    subtitle="Gigavis inhabit the mystical Riphean Mountain, ridden by powerful knights, because of their speed & ability to fly."
                    title="Farm GIGA by migrating UNI/SUSHI LP Tokens."
                  />
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
