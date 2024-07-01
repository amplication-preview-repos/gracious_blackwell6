import { PaymentLinkWhereInput } from "./PaymentLinkWhereInput";
import { PaymentLinkOrderByInput } from "./PaymentLinkOrderByInput";

export type PaymentLinkFindManyArgs = {
  where?: PaymentLinkWhereInput;
  orderBy?: Array<PaymentLinkOrderByInput>;
  skip?: number;
  take?: number;
};
