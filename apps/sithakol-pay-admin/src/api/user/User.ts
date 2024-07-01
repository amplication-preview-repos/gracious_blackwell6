import { PaymentLink } from "../paymentLink/PaymentLink";
import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  paymentLinks?: Array<PaymentLink>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  wallets?: Array<Wallet>;
};
