import { TransactionUpdateManyWithoutPaymentLinksInput } from "./TransactionUpdateManyWithoutPaymentLinksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentLinkUpdateInput = {
  expiresAt?: Date | null;
  linkId?: string | null;
  requestedAmountInCrypto?: number | null;
  requestedAmountInFiat?: number | null;
  status?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutPaymentLinksInput;
  user?: UserWhereUniqueInput | null;
};
