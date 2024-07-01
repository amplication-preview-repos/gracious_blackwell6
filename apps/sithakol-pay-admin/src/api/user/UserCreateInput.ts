import { PaymentLinkCreateNestedManyWithoutUsersInput } from "./PaymentLinkCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletCreateNestedManyWithoutUsersInput } from "./WalletCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  paymentLinks?: PaymentLinkCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  wallets?: WalletCreateNestedManyWithoutUsersInput;
};
