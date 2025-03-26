import React from "react";
import { WagmiProvider } from "wagmi";
import { http, createConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
});

interface WalletProviderProps {
  children: React.ReactNode;
}

const WalletProvider = ({ children }: WalletProviderProps) => {
  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};

export default WalletProvider;
