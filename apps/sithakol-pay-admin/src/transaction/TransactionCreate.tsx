import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PaymentLinkTitle } from "../paymentLink/PaymentLinkTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="paidAmountInCrypto" source="paidAmountInCrypto" />
        <NumberInput label="paidAmountInFiat" source="paidAmountInFiat" />
        <ReferenceInput
          source="paymentLink.id"
          reference="PaymentLink"
          label="paymentLink"
        >
          <SelectInput optionText={PaymentLinkTitle} />
        </ReferenceInput>
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="transactionId" source="transactionId" />
      </SimpleForm>
    </Create>
  );
};
