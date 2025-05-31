export interface StatCard {
  number: number;
  suffix: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface ExamCategory {
  [key: string]: string[];
}

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
