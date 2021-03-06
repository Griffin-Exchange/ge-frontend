import BigNumber from 'bignumber.js'

export { default as formatAddress } from './formatAddress'
export { default as formatCurrency } from './formatCurrency'
export { default as fetchData } from './fetchData'

export const bnToDec = (bn: BigNumber, decimals = 18): number => {
  return bn.dividedBy(new BigNumber(10).pow(decimals)).toNumber()
}

export const decToBn = (dec: number, decimals = 18) => {
  return new BigNumber(dec).multipliedBy(new BigNumber(10).pow(decimals))
}
