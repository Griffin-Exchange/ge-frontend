import React from 'react'
import styled from 'styled-components'
import discordLogo from '../../../assets/img/discord.svg'
import githubLogo from '../../../assets/img/github.svg'
import twitterLogo from '../../../assets/img/twitter.svg'
import uniswapLogo from '../../../assets/img/uniswap.svg'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xc2edad668740f1aa35e4d8f227fb8e17dca888cd#code"
      >
        Griffin Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        {/* Uniswap GRFN-ETH */}
        <img alt="uniswap" src={uniswapLogo} style={{ height: 24 }} />
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/hJ2p555">
        {/* Discord */}
        <img alt="discord" src={discordLogo} style={{ height: 24 }} />
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/sushiswap">
        {/* Github */}
        <img alt="github" src={githubLogo} style={{ height: 24 }} />
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/sushiswap">
        {/* Twitter */}
        <img alt="twitter" src={twitterLogo} style={{ height: 24 }} />
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  font-family: 'Bebas Neue', cursive;
  color: ${(props) => props.theme.color.whiteDoff};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
