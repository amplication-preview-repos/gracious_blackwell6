import { SortOrder } from "../../util/SortOrder";

export type PaymentLinkOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  linkId?: SortOrder;
  requestedAmountInCrypto?: SortOrder;
  requestedAmountInFiat?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
