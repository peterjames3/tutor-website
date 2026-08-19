import { PortableTextBlock } from "next-sanity";
type RichText = PortableTextBlock[];
export interface StatCard {
  number: number;
  suffix: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

// export interface ExamItem {
//   name: string;
//   slug: string;
// }

// export type ExamCategory = Record<string, ExamItem[]>;
// export interface ExamCategory {
//  name: string;
//  slug: string;
// }
export type ExamCategory = Record<string, ExamItem[]>;

export interface AcademicService {
  name: string;
  href: string;
}

export interface NavbarProps {
  className?: string;
}

export interface DropdownMenuProps {
  title: string;
  categories: ExamCategory;
  baseUrl: string;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  academicServices: AcademicService[];
  testPrepCategories: ExamCategory;
  examAidCategories: ExamCategory;
}

export type MenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
};

export type SubMenuItem = {
  name: string;
  href: string;
  group?: string; // For grouping exam categories
};
//other links
export interface LinkItem {
  name: string;
  slug?: string;
  isLink?: boolean;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  timeZone: string;
  service: string;
  scheduleUrgency?: string;
  [key: string]: string | undefined;
}

export interface ExamItem {
  name: string;
  path?: string;
  slug: string;
  description?: string;
}

export interface ExamCategoryData {
  title: string;
  exams: ExamItem[];
}

export type ClassCategory = "k12" | "academics";
export interface SectionItem {
  title: string;
  content: string;
  tips?: string[];
  icon?: string;
}
export interface HeroSectionData {
  _type: "hero";
  preHeading?: string;
  heading: string;
  accentWord?: string;
  subtext?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  title: string;
  content: string;
  sections?: SectionItem[];
  backgroundImage?: {
    alt?: string;
    url?: string;
  };
  backgroundColor?: string;
}
export interface SanityImage {
  url: string;
  alt: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
  caption?: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface CertOverviewSectionData {
  _type: "certOverviewSection";
  sectionId?: string;
  certSlug: string;
}

export interface CertCompareSectionData {
  _type: "certCompareSection";
  sectionId?: string;
  heading?: string;
  certSlugs: string[];
}

export interface FaqSectionData {
  _type: "faqSection";
  sectionId?: string;
  heading?: string;
  subheading?: string;
  faqs: {
    question: string;
    answer?: RichText;
    category?: string;
  }[];
  ctaBlock?: {
    text?: string;
    buttonLabel?: string;
    buttonHref?: string;
  };
}

export interface SidebarListItem {
  text: string;
  link?: string;
}

export interface SidebarCard {
  title: string;
  accentColor?: string;
  items: SidebarListItem[];
}

export interface KeyPoint {
  title: string;
  description: string;
  link?: string;
}

export interface ContentSectionData {
  _type: "contentSectionWithImage";
  sectionId?: string;
   heading: string;
   subheading?: string;
   body: PortableTextBlock[];
   imagePosition?: "left" | "right" | "none";
   imageSize?: string;
   backgroundColor?: string;
   image?: { url: string; alt: string; caption?: string };
   keyPoints?: KeyPoint[];
   ctaButton?: { label: string; href: string; variant: string };
help?: {
  heading: string;
  intro?: string;
  bulletPoints?: { title: string; description: string }[];
  closingNote?: string;
  closingCta?: { label?: string; href?: string };
};
}

export interface FeatureTag {
  label: string;
  color: string;
}

export interface KeywordExpoundData {
  _type: "keyWordExpound";
  sectionId?: string;
  heading: string;
  highlightedText?: string;
  body: PortableTextBlock[];
  primaryCTA?: { label: string; href: string };
  featureTags?: FeatureTag[];
  image?: { url: string; alt: string };
  imagePosition?: "left" | "right" | "none";
  backgroundColor?: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  content: string;
  icon: string;
  image?: SanityImage;
  iconColor: string;
  link?: string;
}

export interface TrustBadge {
  value: string;
  label: string;
  icon: string;
}

export interface WhyWeLeadData {
  sectionId?: string;
  heading: string;
  subheading?: string;
  benefitCards: BenefitCard[];
  trustBadges: TrustBadge[];
  footerNote?: string;
  backgroundColor?: string;
  ctaButton?: { label: string; href: string; variant: string };
}

export interface StructureItem {
  point: string;
  description?: string;
  link?: string;
}

export interface StructureCard {
  title: string;
  badgeColor: string;
  items: StructureItem[];
}

export interface ExamStructureData {
  heading: string;
  subheading?: string;
  body: PortableTextBlock[];
  structureCards: StructureCard[];
  diagramImage?: { url: string; alt: string; caption?: string };
  ctaButton?: { label: string; href: string };
}
export interface BaseExamServicePageData {
  _id: string;
  _createdAt: string;
  seoTitle: string;
  seoDescription?: string;
  slug: string;
  ogImage?: SanityImage;
  sections: PageSection[];
}
export type ExamServicePageData = BaseExamServicePageData;

export type PageSection =
  | HeroSectionData
  | ContentSectionData
  | KeywordExpoundData
  | WhyWeLeadData
  | ExamStructureData
  | CertOverviewSectionData
  | CertCompareSectionData
  | FaqSectionData;

