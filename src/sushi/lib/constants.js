import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x21E19121e1360e09AA1F810280c97A87b85d1069',
  },
  masterChef: {
    1: '0x88375b58CB7b8B67CC46CF56A81395Fe8244Bc34',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xSushi: {
    1: '0x906B6992daF982ACddB57ff1351f17DC8B5017B6'
  }
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const GIGAPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0x550334c8ae2c04ae6abdbf1d82fb82ffb1ea2264',
    },
    tokenAddresses: {
      1: '0x21E19121e1360e09AA1F810280c97A87b85d1069',
    },
    name: 'Giga bytes',
    symbol: 'GIGA/ETH UNILP',
    tokenSymbol: 'GIGA',
    icon: 'gfin-eth.png',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Tethereum Hill',
    symbol: 'USDT/ETH UNILP',
    tokenSymbol: 'USDT',
    icon: 'usdt-eth.png',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
    },
    tokenAddresses: {
      1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    name: 'Cresting Dollar',
    symbol: 'USDC/ETH UNILP',
    tokenSymbol: 'USDC',
    icon: 'usdc-eth.png',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Everydai Climbs',
    symbol: 'DAI/ETH UNILP',
    tokenSymbol: 'DAI',
    icon: 'dai-eth.png',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
    },
    tokenAddresses: {
      1: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    },
    name: 'Satozip Valley',
    symbol: 'wBTC/ETH UNILP',
    tokenSymbol: 'wBTC',
    icon: 'wbtc-eth.png',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0xf52f433b79d21023af94251958bed3b64a2b7930',
    },
    tokenAddresses: {
      1: '0xc8c97d9b0af219c2329a0179f6ab8c7a55b39fc1',
    },
    name: 'Hikers Hut',
    symbol: 'HKMT/USDT UNILP',
    tokenSymbol: 'HKMT',
    icon: 'hkmt-usdt.png',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0xf1f85b2c54a2bd284b1cf4141d64fd171bd85539',
    },
    tokenAddresses: {
      1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    },
    name: 'SuSynth Dollar',
    symbol: 'SUSD/ETH SUSHILP',
    tokenSymbol: 'SUSD',
    icon: 'ssusd-eth.png',
  },
]

export const supportedPools = [
  {
    pid: 8,
    lpAddresses: {
      1: '0x906B6992daF982ACddB57ff1351f17DC8B5017B6',
    },
    tokenAddresses: {
      1: '0x21E19121e1360e09AA1F810280c97A87b85d1069',
    },
    name: 'Migrate GIGA',
    symbol: 'Migrate GIGA win AGATE',
    tokenSymbol: 'GIGA',
    icon: 'gfin-eth.png',
  },
]

export const boostListToken = [
  {
    id: 'eth',
    name: 'ETH',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
  {
    id: 'usdt',
    name: 'USDT',
    tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
  {
    id: 'usdc',
    name: 'USDC',
    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
  {
    id: 'dai',
    name: 'DAI',
    tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
  {
    id: 'wbtc',
    name: 'wBTC',
    tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
  {
    id: 'sussd',
    name: 'SUSD',
    tokenAddress: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    status: false,
    defaultWallet: 0,
    walletEditor: 0,
    transferEditor: 0,
    stateChannelEditor: 0,
    error: '',
  },
]
