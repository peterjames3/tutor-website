import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { sectionType } from "./sectionType";
//import { TestimonialsType } from "./testimonialType";

//Dynamic pages related schemas
import { FaqSectionType } from "./faqSectionType";

import ExamStructureSectionType from "./examStructureSectionType";
import { certOverviewSectionType } from "./certOverviewSectionType";
import { certCompareSectionType } from "./certComparesectiontype";
import { WhyWeLeadType } from "./whyWeLeadType";
import { KeyWordExpoundType } from "./keywordExpoundType";
import { ContentSectionWithImageType } from "./contentSectionWithImageType";
import { HeroType } from "./heroType";
import { ExamServicePageType } from "./examServicePageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // blog related
    blockContentType,
    categoryType,
    postType,
    authorType,
    sectionType,
    // TestimonialsType,

    //dynamic page related
    ExamServicePageType,
    HeroType,
    ContentSectionWithImageType,
    WhyWeLeadType,
    KeyWordExpoundType,
    ...ExamStructureSectionType,
    certOverviewSectionType,
    certCompareSectionType,
    FaqSectionType,
  ],
};
