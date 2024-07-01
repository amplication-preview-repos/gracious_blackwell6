import { PaymentLink as TPaymentLink } from "../api/paymentLink/PaymentLink";

export const PAYMENTLINK_TITLE_FIELD = "linkId";

export const PaymentLinkTitle = (record: TPaymentLink): string => {
  return record.linkId?.toString() || String(record.id);
};
