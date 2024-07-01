import { PaymentLink } from "../paymentLink/PaymentLink";

export type Transaction = {
  createdAt: Date;
  id: string;
  paidAmountInCrypto: number | null;
  paidAmountInFiat: number | null;
  paymentLink?: PaymentLink | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  transactionId: string | null;
  updatedAt: Date;
};
