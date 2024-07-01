import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="PaymentLink"
          target="userId"
          label="PaymentLinks"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Wallet" target="userId" label="Wallets">
          <Datagrid rowClick="show">
            <TextField label="balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="walletId" source="walletId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
