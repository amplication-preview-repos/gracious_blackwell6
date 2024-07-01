import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type TransactionUpdateManyWithoutPaymentLinksInput = {
  connect?: Array<TransactionWhereUniqueInput>;
  disconnect?: Array<TransactionWhereUniqueInput>;
  set?: Array<TransactionWhereUniqueInput>;
};
