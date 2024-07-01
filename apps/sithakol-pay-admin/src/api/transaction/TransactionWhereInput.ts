import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PaymentLinkWhereUniqueInput } from "../paymentLink/PaymentLinkWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  id?: StringFilter;
  paidAmountInCrypto?: FloatNullableFilter;
  paidAmountInFiat?: FloatNullableFilter;
  paymentLink?: PaymentLinkWhereUniqueInput;
  paymentMethod?: "Option1";
  status?: "Option1";
  transactionId?: StringNullableFilter;
};
