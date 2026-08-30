export interface IsoCertificateDetails {
  organizationName: string;
  certificateNumber: string;
  standard: string;
  initialRegistrationDate: string;
  firstSurveillanceDate: string;
  secondSurveillanceDate: string;
  recertificationDate: string;
  registeredAddress: string;
  accreditedBy: string;
  accreditationAddress: string;
  companyNumber: string;
  verificationUrl: string;
  verificationEmail: string;
  scopeText: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  category: 'healthcare' | 'education' | 'empowerment' | 'environment' | 'elderly' | 'special';
  badge: string;
  summary: string;
  description: string;
  image: string;
  metrics: string;
  keyHighlights: string[];
  callToAction: string;
}

export interface HealthCamp {
  id: string;
  title: string;
  location: string;
  village: string;
  date: string;
  time: string;
  specialists: string[];
  services: string[];
  slotsAvailable: number;
  contactPerson: string;
}

export interface HealthCardApplication {
  fullName: string;
  gender: string;
  age: number;
  phone: string;
  village: string;
  district: string;
  pinCode: string;
  familyMembersCount: number;
  category: 'BPL' | 'Senior Citizen' | 'General Rural' | 'Differently Abled' | 'Student';
  photoUrl?: string;
  cardNumber?: string;
  issuedDate?: string;
  expiryDate?: string;
}

export interface DonationRecord {
  id: string;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  panNumber: string;
  amount: number;
  cause: string;
  paymentMethod: string;
  date: string;
  receiptNumber: string;
  is80GClaimed: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  location: string;
  date: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatar: string;
  impactArea: string;
}
