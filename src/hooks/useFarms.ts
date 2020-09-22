import { useContext } from 'react'
import { Context as FarmsContext } from '../contexts/Farms'

const useFarms = () => {
  const { farms, gfinFarms } = useContext(FarmsContext)
  return [farms, gfinFarms]
}

export default useFarms
