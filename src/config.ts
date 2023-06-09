import { ChainId } from 'insswap-sdk'

export default {
  //rpc: 'https://wallet.tomochain.com/api/luaswap/rpc',
  rpc: 'https://mainnet.era.zksync.io',
  rpcTomochain: 'https://rpc.tomochain.com',
  rpcZk: 'https://mainnet.era.zksync.io',
  rpcZkTestnet: 'https://testnet.era.zksync.dev',
  chainId: 1,
  apiETH: 'https://wallet.tomochain.com/api/luaswap',
  apiTOMO: 'https://wallet.tomochain.com/api/luaswap/tomochain'
}

export const START_REWARD_AT_BLOCK: { [chainId in ChainId]: number } = {
  1: 10950600,
  3: 10950600,
  4: 10950600,
  5: 10950600,
  42: 10950600,
  88: 32787447,
  89: 32787447,
  99: 32787447,
  280: 4510323,
  324: 1879403,
  195: 10950600
}

export const NUMBER_BLOCKS_PER_YEAR: { [chainId in ChainId]: number } = {
  1: 2425000,
  3: 2425000,
  4: 2425000,
  5: 2425000,
  42: 2425000,
  88: 12614400,
  89: 12614400,
  99: 12614400,
  280: 2425000,
  324: 2425000,
  195: 2425000
}

export const RPC_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap/rpc',
  3: '',
  4: '',
  5: '',
  42: '',
  88: 'https://rpc.tomochain.com',
  89: '',
  99: '',
  280: 'https://testnet.era.zksync.dev',
  324: 'https://mainnet.era.zksync.io',
  195: 'https://okbtestrpc.okbchain.org'
}

export const API_URL: { [chainId in ChainId]: string } = {
  1: 'https://wallet.tomochain.com/api/luaswap',
  3: '',
  4: '',
  5: '',
  42: '',
  88: 'https://wallet.tomochain.com/api/luaswap/tomochain',
  89: '',
  99: '',
  280: '',
  324: '',
  195: ''
}

export const LUA_CONTRACT: { [chainId in ChainId]: string } = {
  1: '0xB1f66997A5760428D3a87D68b90BfE0aE64121cC',
  3: '',
  4: '',
  5: '',
  42: '',
  88: '0x7262fa193e9590B2E075c3C16170f3f2f32F5C74',
  89: '',
  99: '',
  280: '',
  324: '',
  195: ''
}
