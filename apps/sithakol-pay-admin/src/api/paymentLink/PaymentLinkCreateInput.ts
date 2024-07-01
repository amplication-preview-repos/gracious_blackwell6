import { TransactionCreateNestedManyWithoutPaymentLinksInput } from "./TransactionCreateNestedManyWithoutPaymentLinksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentLinkCreateInput = {
  expiresAt?: Date | null;
  linkId?: string | null;
  requestedAmountInCrypto?: number | null;
  requestedAmountInFiat?: number | null;
  status?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutPaymentLinksInput;
  user?: UserWhereUniqueInput | null;
};
