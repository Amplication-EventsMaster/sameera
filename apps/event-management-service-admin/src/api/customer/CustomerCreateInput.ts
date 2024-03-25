import { EventCreateNestedManyWithoutCustomersInput } from "./EventCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  events?: EventCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  status?: "Muly" | "Yuval" | "Vika" | null;
};
