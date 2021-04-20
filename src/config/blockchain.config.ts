export const TIMESTAMP_CHECK_URL = 'https://wordproof.com/check/';

export const BLOCKCHAIN_CONFIG: Record<Blockchain, BlockChainData> = {
  eth_main: {
    contract: '0x96E1258049049D4A0D6054FBcd0D9951AbdEe9E1',
    action: 'stamp',
    explorer: 'https://etherscan.io/tx/',
  },

  eth_ropsten: {
    contract: '0xC879094AAa723185d013f17ff63aea9683667133',
    action: 'stamp',
    explorer: 'https://ropsten.etherscan.io/tx/',
  },

  eos: {
    contract: 'wordproofcom',
    action: 'stamp',
    explorer: 'https://bloks.io/transaction/',
  },

  eosio_main: {
    contract: 'wordproofcom',
    action: 'stamp',
    explorer: 'https://bloks.io/transaction/',
  },

  eosio_jungle3: {
    contract: 'wordproofcom',
    action: 'stamp',
    explorer: 'https://jungle3.bloks.io/transaction/',
  },

  eosio_telos: {
    contract: 'wordproofcom',
    action: 'stamp',
    explorer: 'https://telos.bloks.io/transaction/',
  },

  eosio_kylin: {
    contract: 'wordproofcom',
    action: 'stamp',
    explorer: 'https://kylin.bloks.io/transaction/',
  },
};

export type Blockchain =
  | 'eth_main'
  | 'eos'
  | 'eth_ropsten'
  | 'eosio_main'
  | 'eosio_jungle3'
  | 'eosio_telos'
  | 'eosio_kylin';

interface BlockChainData {
  contract: string;
  action: string;
  explorer: string;
}

