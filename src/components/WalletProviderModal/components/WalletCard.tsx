import React from 'react'
import Button from '../../Button'
import styled from 'styled-components'
import CardContent from '../../CardContent'
import CardIcon from '../../CardIcon'
import CardTitle from '../../CardTitle'
import Spacer from '../../Spacer'

interface WalletCardProps {
  icon: React.ReactNode
  onConnect: () => void
  title: string
}

const WalletCard: React.FC<WalletCardProps> = ({ icon, onConnect, title }) => (
  <CardWallet>
    <CardContent>
      <CardIcon>{icon}</CardIcon>
      <CardTitle text={title} />
      <Spacer />
      <Button onClick={onConnect} text="Connect" />
    </CardContent>
  </CardWallet>
)

const CardWallet = styled.div`
  background: ${(props) => props.theme.color.whiteDoff};
  border-radius: 12px;
  box-shadow: 8px 8px 12px 0 rgba(0, 0, 0, 0.15),
    -8px -8px 12px 0 rgba(255, 255, 255, 1);
  display: flex;
  flex: 1;
  flex-direction: column;
`

export default WalletCard
