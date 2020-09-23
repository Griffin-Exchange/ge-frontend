import { useContext } from 'react'
import { Context as FarmsContext, Farm } from '../contexts/Farms'

const useFarm = (id: string, type: string): Farm => {
  const { farms, gfinFarms } = useContext(FarmsContext)
  const farm = farms.find((farm) => farm.id === id)
  const gfinfarm = gfinFarms.find((farm) => farm.id === id)
  return type === 'gfin' ? gfinfarm : farm
}

export default useFarm
