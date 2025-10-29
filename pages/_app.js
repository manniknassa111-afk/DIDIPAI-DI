import '../styles/globals.css';
import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'

// --- WalletConnect / Wagmi setup (for WalletConnect + MetaMask) ---
const chains = [bsc];
const { provider } = configureChains(chains, [w3mProvider({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID, version: 2, chains }),
  provider
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Component {...pageProps} />
      </WagmiConfig>

      <Web3Modal projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID} ethereumClient={ethereumClient} />
    </>
  );
}
