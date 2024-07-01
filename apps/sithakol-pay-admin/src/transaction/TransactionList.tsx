import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYMENTLINK_TITLE_FIELD } from "../paymentLink/PaymentLinkTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
