# InExchange Interface

An open source interface for InExchange -- a protocol for decentralized exchange of multichain.

- Website: [inexchange.cc](https://inexchange.cc/)
- Interface: [app.inexchange.cc](https://app.inexchange.cc)
- Docs: [inexchange.cc/docs/](https://inexchange.cc/docs/)
- Twitter: [@IN_Exchange_zk](https://twitter.com/IN_Exchange_zk)


## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 


## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing inexchange Interface

The inexchange Interface supports swapping against, and migrating or removing liquidity.
