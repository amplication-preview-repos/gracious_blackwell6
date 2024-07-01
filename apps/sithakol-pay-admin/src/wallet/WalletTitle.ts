import { Wallet as TWallet } from "../api/wallet/Wallet";

export const WALLET_TITLE_FIELD = "walletId";

export const WalletTitle = (record: TWallet): string => {
  return record.walletId?.toString() || String(record.id);
};
