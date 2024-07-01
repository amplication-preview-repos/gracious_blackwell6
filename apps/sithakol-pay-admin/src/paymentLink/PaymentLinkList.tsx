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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PaymentLinkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaymentLinks"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
