import { PaymentLinkUpdateManyWithoutUsersInput } from "./PaymentLinkUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { WalletUpdateManyWithoutUsersInput } from "./WalletUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  paymentLinks?: PaymentLinkUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  wallets?: WalletUpdateManyWithoutUsersInput;
};
