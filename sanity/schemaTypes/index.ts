import type { SchemaTypeDefinition } from "sanity";
import blogPage from "./blog";
import blogPost from "./blogPost";
import homepage from "./homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, blogPage, blogPost],
};
