import React from 'react'
import { NavLink } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import styled from 'styled-components'
import AccountButton from '../components/AccountButton'

const Nav: React.FC = () => {
  const { account } = useWallet()

  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/farms">
        Farms
      </StyledLink>
      <StyledLink exact activeClassName="active" to="/staking">
        Golden Nest
      </StyledLink>
      <StyledAbsoluteLink
        href="https://snapshot.page/#/griffin"
        target="_blank"
      >
        Governance
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://griffin.exchange/bridge"
        target="_blank"
      >
        Token Bridge
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://griffin.exchange/app/"
        target="_blank"
      >
        Exchange
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
            href="https://griffin.exchange/analytics"
            target="_blank"
          >
            Analytics
          </StyledAbsoluteLink>
      {!!account && (
        <>
{/*           <StyledLink exact activeClassName="active" to="/topup">
            Top Up
          </StyledLink> */}
        </>
      )}

      <StyledAccountButtonWrapper>
        <AccountButton />
      </StyledAccountButtonWrapper>
    </StyledNav>
  )
}

const StyledAccountButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 156px;
  @media (max-width: 400px) {
    justify-content: center;
    width: auto;
  }
`

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.whiteDoff};
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.brown};
  }
  &.active {
    color: ${(props) => props.theme.color.brown};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.whiteDoff};
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.brown};
  }
  &.active {
    color: ${(props) => props.theme.color.brown};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
