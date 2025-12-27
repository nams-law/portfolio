
import React from 'react';
import { 
  Scale, 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  Building2, 
  Landmark 
} from 'lucide-react';
import { Service, NavItem, ExperienceItem, EducationItem, LocalizedString } from './types';

export const UI_TEXT: Record<string, LocalizedString> = {
  name: { en: 'Namrata Khadka', ne: 'नाम्रता खड्का' },
  consultation: { en: 'Consult Now', ne: 'परामर्श लिनुहोस्' },
  practiceTitle: { en: 'Practice Areas', ne: 'कार्यक्षेत्र' },
  practiceSub: { en: 'Focused expertise designed to help you navigate the nuances of the law in Nepal.', ne: 'नेपालको कानुनी जटिलताहरू सुल्झाउन र तपाईंको लक्ष्य प्राप्त गर्न मद्दत गर्ने विशेषज्ञता।' },
  biographyTitle: { en: 'Biography', ne: 'जीवनी' },
  historyTitle: { en: 'Professional History', ne: 'व्यावसायिक इतिहास' },
  historySub: { en: "An evolving journey through Nepal's key legal institutions.", ne: "नेपालका प्रमुख कानुनी संस्थाहरू मार्फत एक विकसित यात्रा।" },
  legalExp: { en: 'Legal Experience', ne: 'कानुनी अनुभव' },
  academicBack: { en: 'Academic Background', ne: 'शैक्षिक पृष्ठभूमि' },
  contactTitle: { en: 'Connect with Counsel', ne: 'कानुनी सल्लाहका लागि जोडिनुहोस्' },
  contactSub: { en: "Available for freelance legal advisory and project-based consultations in Kathmandu.", ne: "काठमाडौँमा स्वतन्त्र कानुनी सल्लाह र परियोजनामा आधारित परामर्शको लागि उपलब्ध।" },
  formName: { en: 'Your Full Name', ne: 'तपाईंको पूरा नाम' },
  formEmail: { en: 'Email Address', ne: 'इमेल ठेगाना' },
  formMessage: { en: 'Message & Inquiry', ne: 'सन्देश र सोधपुछ' },
  formSubmit: { en: 'Submit Inquiry', ne: 'सोधपुछ पठाउनुहोस्' },
  formSent: { en: 'Message Sent! Dhanyabad.', ne: 'सन्देश पठाइयो! धन्यवाद।' },
  address: { en: 'Kathmandu, Nepal', ne: 'काठमाडौँ, नेपाल' },
  disclaimer: { en: 'Legal Disclaimer: Information provided is for informational purposes only.', ne: 'कानुनी अस्वीकरण: प्रदान गरिएको जानकारी जानकारीमूलक उद्देश्यका लागि मात्र हो।' },
  heroBadge: { en: 'Advocate & Freelance Legal Advisor', ne: 'अधिवक्ता र स्वतन्त्र कानुनी सल्लाहकार' },
  heroTitle: { en: 'Precise legal architecture for a modern Nepal.', ne: 'आधुनिक नेपालका लागि सटीक कानुनी संरचना।' },
  heroSub: { en: 'Available for freelance legal services. Providing sophisticated solutions to individuals and enterprises across Nepal.', ne: 'स्वतन्त्र कानुनी सेवाका लागि उपलब्ध। नेपालभरिका व्यक्ति र उद्यमहरूलाई परिष्कृत कानुनी समाधानहरू प्रदान गर्दै।' },
  freelanceStatus: { en: 'Open for Freelance Projects', ne: 'फ्रिल्यान्स परियोजनाहरूको लागि उपलब्ध' },
  aboutQuote: { en: '"Dedicated to bridging the gap between traditional legal practice and modern freelance needs."', ne: '"परम्परागत कानुनी अभ्यास र आधुनिक फ्रिल्यान्स आवश्यकताहरू बीचको दूरी कम गर्न समर्पित।"' },
  aboutP1: { en: 'A graduate of the National Law College, Tribhuvan University (B.A.LLB), I specialize in providing independent, high-stakes legal counsel.', ne: 'नेसनल ल कलेज, त्रिभुवन विश्वविद्यालय (B.A.LLB) को स्नातक, म स्वतन्त्र र उच्च-स्तरको कानुनी सल्लाह प्रदान गर्नमा विशेषज्ञ छु।' },
  aboutP2: { en: 'My experience ranges from municipal governance to corporate banking, now focusing on providing direct freelance expertise to clients.', ne: 'मेरो अनुभव नगरपालिका शासनदेखि कर्पोरेट बैंकिङसम्म फैलिएको छ, अहिले म ग्राहकहरूलाई प्रत्यक्ष फ्रिल्यान्स विशेषज्ञता प्रदान गर्नमा केन्द्रित छु।' }
};

export const NAV_ITEMS: NavItem[] = [
  { label: { en: 'Practice Areas', ne: 'कार्यक्षेत्र' }, href: '#services' },
  { label: { en: 'Biography', ne: 'जीवनी' }, href: '#about' },
  { label: { en: 'Experience', ne: 'इतिहास' }, href: '#experience' },
  { label: { en: 'Contact', ne: 'सम्पर्क' }, href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: { en: 'Banking & Finance', ne: 'बैंकिङ र वित्त' },
    description: { en: 'Specialized legal advisory on Nepalese banking regulations and loan documentation.', ne: 'नेपाली बैंकिङ नियमहरू र ऋण कागजातहरूमा विशेष कानुनी सल्लाह।' },
    icon: <Landmark className="w-6 h-6 text-stone-700" />,
  },
  {
    title: { en: 'Corporate & Commercial', ne: 'कर्पोरेट र व्यावसायिक' },
    description: { en: 'Expertise in business registration and corporate governance in Nepal.', ne: 'नेपालमा व्यवसाय दर्ता र कर्पोरेट सुशासनमा विशेषज्ञता।' },
    icon: <Briefcase className="w-6 h-6 text-stone-700" />,
  },
  {
    title: { en: 'Local Governance', ne: 'स्थानीय शासन' },
    description: { en: 'Navigating municipal regulations and local policy frameworks.', ne: 'नगरपालिकाका नियमहरू र स्थानीय नीति ढाँचाहरू बुझ्न सहयोग।' },
    icon: <Building2 className="w-6 h-6 text-stone-700" />,
  },
  {
    title: { en: 'Intellectual Property', ne: 'बौद्धिक सम्पत्ति' },
    description: { en: 'Strategic protection for trademarks and designs in Nepal.', ne: 'नेपालमा ट्रेडमार्क र डिजाइनहरूको रणनीतिक संरक्षण।' },
    icon: <ShieldCheck className="w-6 h-6 text-stone-700" />,
  },
  {
    title: { en: 'Legal Drafting', ne: 'कानुनी मस्यौदा' },
    description: { en: 'Precise preparation of pleadings and deeds under Nepalese law.', ne: 'नेपाली कानुन बमोजिम निवेदन र लिखतहरूको सटीक तयारी।' },
    icon: <FileText className="w-6 h-6 text-stone-700" />,
  },
  {
    title: { en: 'Civil Advisory', ne: 'देवानी सल्लाह' },
    description: { en: 'Comprehensive advice on property and family law matters.', ne: 'सम्पत्ति र पारिवारिक कानुनका मामिलामा विस्तृत सल्लाह।' },
    icon: <Scale className="w-6 h-6 text-stone-700" />,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: { en: '2023 — 2025', ne: '२०२३ — २०२५' },
    role: { en: 'Trainee Associate', ne: 'प्रशिक्षार्थी सहयोगी' },
    organization: { en: 'S & S Jurists', ne: 'एस एण्ड एस जुरिस्ट्स' },
    description: { en: 'Assisting senior partners in civil and commercial litigation.', ne: 'वरिष्ठ साझेदारहरूलाई देवानी र व्यावसायिक मुद्दाहरूमा सहयोग।' }
  },
  {
    year: { en: '2023/11 — 2024/01', ne: '२०२३/११ — २०२४/०१' },
    role: { en: 'Legal Intern', ne: 'कानुनी प्रशिक्षार्थी' },
    organization: { en: 'Rastriya Banijya Bank', ne: 'राष्ट्रिय वाणिज्य बैंक' },
    description: { en: 'Insight into banking laws and corporate compliance.', ne: 'बैंकिङ कानुन र कर्पोरेट अनुपालनमा विशेष ज्ञान।' }
  },
  {
    year: { en: '2022/11 — 2023/02', ne: '२०२२/११ — २०२३/०२' },
    role: { en: 'Legal Intern', ne: 'कानुनी प्रशिक्षार्थी' },
    organization: { en: 'Kathmandu Metropolitan City', ne: 'काठमाडौँ महानगरपालिका' },
    description: { en: 'Review of administrative legal matters and municipal policy.', ne: 'प्रशासकीय कानुनी मामिला र नगरपालिका नीतिको समीक्षा।' }
  }
];

export const EDUCATION: EducationItem[] = [
  {
    year: { en: '2024', ne: '२०२४' },
    degree: { en: 'B.A.LLB', ne: 'बी.ए. एल.एल.बी.' },
    institution: { en: 'National Law College, TU', ne: 'नेसनल ल कलेज, त्रि.वि.' },
    honors: { en: 'Class of 2024', ne: '२०२४ ब्याच' }
  }
];
