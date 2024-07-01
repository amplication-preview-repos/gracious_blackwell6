import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentLinkWhereInput = {
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  linkId?: StringNullableFilter;
  requestedAmountInCrypto?: FloatNullableFilter;
  requestedAmountInFiat?: FloatNullableFilter;
  status?: "Option1";
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
