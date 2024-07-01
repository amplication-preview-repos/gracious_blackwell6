import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PAYMENTLINK_TITLE_FIELD } from "../paymentLink/PaymentLinkTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="paidAmountInCrypto" source="paidAmountInCrypto" />
        <TextField label="paidAmountInFiat" source="paidAmountInFiat" />
        <ReferenceField
          label="paymentLink"
          source="paymentlink.id"
          reference="PaymentLink"
        >
          <TextField source={PAYMENTLINK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="paymentMethod" source="paymentMethod" />
        <TextField label="status" source="status" />
        <TextField label="transactionId" source="transactionId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
