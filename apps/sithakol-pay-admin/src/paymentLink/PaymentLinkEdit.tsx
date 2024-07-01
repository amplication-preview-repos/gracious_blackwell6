import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const PaymentLinkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiresAt" source="expiresAt" />
        <TextInput label="linkId" source="linkId" />
        <NumberInput
          label="requestedAmountInCrypto"
          source="requestedAmountInCrypto"
        />
        <NumberInput
          label="requestedAmountInFiat"
          source="requestedAmountInFiat"
        />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
