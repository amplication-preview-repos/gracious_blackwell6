import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYMENTLINK_TITLE_FIELD } from "./PaymentLinkTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentLinkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiresAt" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="linkId" source="linkId" />
        <TextField
          label="requestedAmountInCrypto"
          source="requestedAmountInCrypto"
        />
        <TextField
          label="requestedAmountInFiat"
          source="requestedAmountInFiat"
        />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Transaction"
          target="paymentLinkId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
