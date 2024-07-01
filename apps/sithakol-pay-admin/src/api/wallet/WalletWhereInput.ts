import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WalletWhereInput = {
  balance?: FloatNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  walletId?: StringNullableFilter;
};
