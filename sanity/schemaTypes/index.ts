import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { sectionType } from "./sectionType";
import { TestimonialsType } from "./testimonialType";
import { examaidType } from "./exam-aidType";
import { examprepType } from "./exam-prepType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    TestimonialsType,
    examaidType,
    examprepType,
  ],
};
