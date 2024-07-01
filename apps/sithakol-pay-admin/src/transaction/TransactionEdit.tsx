import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PaymentLinkTitle } from "../paymentLink/PaymentLinkTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
