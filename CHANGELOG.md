# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-02-11

### Added

- **CoinbaseAgentTool** node: AI tool node with 7 LangChain tools for n8n AI Agent
  - `get_wallet_details` — get or create EVM account
  - `native_transfer` — send ETH/native tokens
  - `erc20_transfer` — send ERC-20 tokens
  - `get_balance` — check token balances
  - `swap_tokens` — execute token swaps
  - `get_swap_price` — quote swap prices
  - `request_faucet` — request testnet tokens
- **CoinbaseCdp** node: action node with 7 resources, 16 operations
  - Account (getOrCreate, listBalances, requestFaucet)
  - Solana Account (getOrCreate, requestFaucet)
  - Smart Account (getOrCreate)
  - Transfer (sendNative, sendErc20)
  - Swap (execute, quote)
  - Policy (list, get, create, update, delete)
  - Balance (listTokens)
  - `usableAsTool: true` for AI Agent compatibility
- **CoinbaseTrigger** node: polling trigger for balance change monitoring
- **CoinbaseCdpApi** credential: API Key ID, API Secret, Wallet Secret
- Support for 12 networks (10 EVM + 2 Solana)
- 7 example workflows
- 116 unit tests with 100% code coverage
- E2E test runner against live n8n

[0.1.0]: https://github.com/pvdyck/n8n-nodes-coinbase-cdp/releases/tag/v0.1.0
