import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const WalletButton: FC = () => {
  const { wallet } = useWallet();

  return (
    <WalletMultiButton className="!bg-gradient-to-r from-purple-600 to-indigo-600 !rounded-full !py-3 !px-6 !h-auto hover:!shadow-lg hover:from-purple-700 hover:to-indigo-700" />
  );
};