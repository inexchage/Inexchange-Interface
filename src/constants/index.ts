import { ChainId, JSBI, Percent, Token, WETH } from 'insswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletconnect, walletlink } from '../connectors' // remove portis, fortmatic
export const FACTORY_ADDRESS = '0x28c79368257CD71A122409330ad2bEBA7277a396'
// TODO: Need to change to luaswap's Router address
export const ROUTER_ADDRESS = '0x1d5C6F1607A171Ad52EFB270121331b3039dD83e'
// Tomo router address testnet: 0x6f7425954a609bc4f585A13664c414D543B676d8
export const TOMO_ROUTER_ADDRESS = '0x0b792a01Fd3E8b3e23aaaA28561c3E774A82AA7b'

// ZKTESTNET router address 
export const ZKTESTNET_ROUTER_ADDRESS = '0xD807Ba9d1bad893D5c2C23d90757dd17Eb463CC0'

// OKTESTNET router address 
export const OKTESTNET_ROUTER_ADDRESS = '0x30FE4f15Bdac26901df48656a88fd6f424a614BB'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// Base Token on OKBChain TEST NetWork
// TESTNET
export const OUSDT = new Token(
  ChainId.OKBC_TESTNET,
  '0x66FB1593FD4ceB3D268A4011e23522e3463d1d68',
  18,
  'USDT',
  'Tether USD'
)
export const OBTC = new Token(
  ChainId.OKBC_TESTNET,
  '0xBCE20487A43684DeD233943b6E61616a39fdB597',
  18,
  'BTC',
  'BTC'
)
export const OUSDC = new Token(
  ChainId.OKBC_TESTNET, 
  '0xe715d7d229e6bcABa2aA8892dC58B84198cfFAdD',
  18, 
  'USDC', 
  'USDC'
)

export const OETH = new Token(
  ChainId.OKBC_TESTNET,
  '0x8f0F1c9e98C4e2c3f15F722A3bD833868Ef60f6E',
  18,
  'ETH',
  'ETH'
)
export const OLIB = new Token(
  ChainId.OKBC_TESTNET,
  '0x1a24E42bC4f3897B66deF54C86681bAaCE3485C2',
  18,
  'LIB',
  'LIB'
)
// MAINNET
/*
export const MLUA = new Token(
  ChainId.TOMOCHAIN_MAINNET,
  '0x7262fa193e9590b2e075c3c16170f3f2f32f5c74',
  18,
  'LUA',
  'LuaToken'
)*/

// Base Token on ETH NetWork
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18, 'WBTC', 'Wrapped BTC')

// TODO this is only approximate, it's actually based on blocks
export const PROPOSAL_LENGTH_IN_DAYS = 7

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.OKBC_TESTNET]: new Token(ChainId.OKBC_TESTNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap')
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.OKBC_TESTNET]: [WETH[ChainId.OKBC_TESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], USDC, USDT],
  [ChainId.OKBC_TESTNET]: [...WETH_ONLY[ChainId.OKBC_TESTNET], USDC, USDT]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {},
  [ChainId.OKBC_TESTNET]: {}
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [USDC, USDT],
  [ChainId.OKBC_TESTNET]: [USDT, USDC]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], USDC, USDT],
  [ChainId.OKBC_TESTNET]: [...WETH_ONLY[ChainId.OKBC_TESTNET], OKB, USDT, USDC]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [[USDC, USDT]],
  [ChainId.OKBC_TESTNET]: [[USDT, USDC]]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  }
}

export const NETWORK_SCAN: { [chainId in ChainId]: string } = {
  1: 'View Etherscan',
  195: 'View OKBC'
}

export const TokenTextSupport: { [chainId in ChainId]: string } = {
  1: 'ETH',
  195: 'ETH'
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const MIN_TOMO: JSBI = JSBI.exponentiate(JSBI.BigInt(0), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

export const STAKING_POOLS = [
  {
    key: 'lua-xlua',
    name: 'LUA - xLUA',
    description: 'Deposit LUA-xLUA LUA-V1 LP to earn xLUA',
    longSymbol: 'LUA-xLUA LUA-V1 LP',
    shortSymbol: 'LUA-xLUA',
    token: 'LUA',
    token2: 'xLUA',
    icon: 'https://luaswap.org/favicon.png',
    icon2: 'https://luaswap.org/favicon.png'
  }
]

type TokenIconProps = {
  [index: string]: string
}
export const TOKEN_ICONS: TokenIconProps = {
  USDC: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png',
  ETH: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
  USDT: 'https://s2.coinmarketcap.com/static/img/coins/128x128/825.png',
  WBTC: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png',
  UNI: 'https://s2.coinmarketcap.com/static/img/coins/128x128/7083.png',
  DAI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
  BTC: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1.png'
}
