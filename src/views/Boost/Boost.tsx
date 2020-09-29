import React, { useEffect } from 'react'
import styled from 'styled-components'
import background from '../../assets/img/background-01.png'

import Page from '../../components/Page'

import BoostCard from './components/BoostCard'

const Farm: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <StyledBackground />
      <Page>
        <BoostCard />
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
