import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WishlistTitle } from "../wishlist/WishlistTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="listingCreatedBy" source="listingCreatedBy" />
        <TextInput label="locationType" source="locationType" />
        <div />
        <div />
        <div />
        <TextInput label="placeType" source="placeType" />
        <NumberInput step={1} label="price" source="price" />
        <TextInput label="title" source="title" />
        <ReferenceArrayInput
          source="wishlists"
          reference="Wishlist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WishlistTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
