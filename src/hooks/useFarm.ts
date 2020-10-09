import { useContext } from 'react'
import { Context as FarmsContext, Farm } from '../contexts/Farms'

const useFarm = (id: string, type: string): Farm => {
  const { farms, gfinFarms } = useContext(FarmsContext)
  if (type === 'gfin') {
    const gfinfarm = gfinFarms.find((farm) => {
      return farm.tokenSymbol === id
    })
    return gfinfarm
  } else {
    const farm = farms.find((farm) => farm.tokenSymbol === id)
    return farm
  }
}

export default useFarm
