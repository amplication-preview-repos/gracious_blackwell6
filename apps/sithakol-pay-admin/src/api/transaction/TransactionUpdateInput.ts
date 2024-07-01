import { PaymentLinkWhereUniqueInput } from "../paymentLink/PaymentLinkWhereUniqueInput";

export type TransactionUpdateInput = {
  paidAmountInCrypto?: number | null;
  paidAmountInFiat?: number | null;
  paymentLink?: PaymentLinkWhereUniqueInput | null;
  paymentMethod?: "Option1" | null;
  status?: "Option1" | null;
  transactionId?: string | null;
};
