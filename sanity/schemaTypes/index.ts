import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { sectionType } from "./sectionType";
import { TestimonialsType } from "./testimonialType";
import { examaidType } from "./exam-aidType";
import { examprepType } from "./exam-prepType";
//New section imports
import { FaqSectionType } from "./faqSectionType";
import { WhyChooseUsType } from "./whychooseusType";
import { UnlockPathSectionType } from "./unlockPathSectionType";
import { ChallengesSectionType } from "./challengesSectiontype";
import { ExamStructureSectionType } from "./examStructureSectionType";
import { StepsSectionType } from "./stepsSectionType";
import { ContentSectionWithImageType } from "./contentSectionWithImageType";
import { HeroType } from "./heroType";
import { ExamServicePageType } from "./examServicePageType";
//import { BlockContentMainType } from "./blockContentMainType";


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

    //New section
    //BlockContentMainType,
    ExamServicePageType,
    HeroType,
    ContentSectionWithImageType,
    StepsSectionType,
    ExamStructureSectionType,
    ChallengesSectionType,
    UnlockPathSectionType,
    WhyChooseUsType,
    FaqSectionType,
  ],
};
