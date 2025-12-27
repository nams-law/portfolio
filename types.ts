
import React from 'react';

export type Locale = 'ne' | 'en';

export interface LocalizedString {
  en: string;
  ne: string;
}

export interface Service {
  title: LocalizedString;
  description: LocalizedString;
  icon: React.ReactNode;
}

export interface NavItem {
  label: LocalizedString;
  href: string;
}

export interface ExperienceItem {
  year: LocalizedString;
  role: LocalizedString;
  organization: LocalizedString;
  description: LocalizedString;
}

export interface EducationItem {
  year: LocalizedString;
  degree: LocalizedString;
  institution: LocalizedString;
  honors?: LocalizedString;
}
