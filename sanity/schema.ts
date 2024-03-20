import { type SchemaTypeDefinition } from "sanity";
import boat from "./schemas/boat";
import contact from "./schemas/contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [boat, contact],
};
