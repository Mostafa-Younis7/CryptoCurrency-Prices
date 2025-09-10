const suggestions = ['Bitcoin',
  'Ethereum','XRP','Tether','BNB','Solana','USDC','Lido Staked Ether',
  'Dogecoin','TRON','Cardano','Wrapped stETH','Wrapped Bitcoin','Stellar','Hyperliquid',
  'Sui','Chainlink','Wrapped Beacon ETH','Bitcoin Cash','Hedera','Wrapped eETH','Avalanche',
  'Ethena USDe','Litecoin','WETH','LEO Token','Toncoin','USDS','Shiba Inu',
  'Binance Bridged USDT (BNB Smart Chain)','Coinbase Wrapped BTC','Uniswap','WhiteBIT Coin','Polkadot','Bitget Token','Ethena Staked USDe',
  'Cronos',
  'Monero','Pepe','Aave','Ethena','Dai','Bittensor','Mantle',
  'NEAR Protocol','Ethereum Classic','Ondo','Aptos','Internet Computer','Pi Network','OKB',
  'Jito Staked SOL','Kaspa','Binance-Peg WETH','Pudgy Penguins','Algorand','BlackRock USD Institutional Digital Liquidity Fund','USD1',
  'Arbitrum','POL (ex-MATIC)','VeChain','Cosmos Hub','Gate','Bonk','Render',
  'Fasttoken','Story','Worldcoin','sUSDS','Official Trump','Rocket Pool ETH','Binance Staked SOL',
  'Artificial Superintelligence Alliance','Jupiter Perpetuals Liquidity Provider Token','Sei','Sky','Kelp DAO Restaked ETH','Flare','Filecoin',
  'Quant','SPX6900','Lombard Staked BTC','Provenance Blockchain','Jupiter','XDC Network','StakeWise Staked ETH',
  'USDtb','Liquid Staked ETH','Mantle Staked Ether','Injective','USDT0','NEXO','Stacks',
  'KuCoin','First Digital USD','Optimism','Celestia','Tether Gold','Curve DAO','Falcon USD'
]

const input = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdownList');

input.addEventListener('input', function () {
  const value = this.value.toLowerCase();
  dropdown.innerHTML = '';
  if (value === '') {
    dropdown.classList.remove('show');
    return;
  }
  const filtered = suggestions.filter(item => item.toLowerCase().includes(value));
  if (filtered.length === 0) {
    dropdown.classList.remove('show');
    return;
  }
  filtered.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<button type="button" class="dropdown-item">${item}</button>`;
    li.addEventListener('click', function () {
      input.value = item;
      dropdown.classList.remove('show');
    });
    dropdown.appendChild(li);
  });
  dropdown.classList.add('show');
});
// Hide dropdown when clicking outside
document.addEventListener('click', function (e) {
  if (!e.target.closest('.position-relative')) {
    dropdown.classList.remove('show');
  }
});