import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentLinkListRelationFilter } from "../paymentLink/PaymentLinkListRelationFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  paymentLinks?: PaymentLinkListRelationFilter;
  username?: StringFilter;
  wallets?: WalletListRelationFilter;
};
