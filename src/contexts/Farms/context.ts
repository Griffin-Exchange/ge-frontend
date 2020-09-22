import { createContext } from 'react'
import { FarmsContext } from './types'

const context = createContext<FarmsContext>({
  farms: [],
  gfinFarms: [],
  unharvested: 0,
})

export default context
