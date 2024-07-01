import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  paidAmountInCrypto?: SortOrder;
  paidAmountInFiat?: SortOrder;
  paymentLinkId?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
