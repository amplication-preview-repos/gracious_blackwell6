import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type PaymentLink = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  linkId: string | null;
  requestedAmountInCrypto: number | null;
  requestedAmountInFiat: number | null;
  status?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
