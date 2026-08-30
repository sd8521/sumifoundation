import { IsoCertificateDetails, ProgramItem, HealthCamp, GalleryItem, Testimonial } from '../types';

export const ISO_DETAILS: IsoCertificateDetails = {
  organizationName: "SUMI CARE FOUNDATION",
  certificateNumber: "EU-02-D-4511",
  standard: "ISO 9001:2015 (Quality Management Systems)",
  initialRegistrationDate: "05-02-2026",
  firstSurveillanceDate: "04-02-2027",
  secondSurveillanceDate: "04-02-2028",
  recertificationDate: "04-02-2029",
  registeredAddress: "VILL- JAMINISHINTA HATHKO, PO DARALHAT, DARALHAT, TAPAN, SOUTH DINAJPUR- 733127, WEST BENGAL, INDIA",
  accreditedBy: "EU Certification Limited",
  accreditationAddress: "15 Broadstone House Dorset Road London England SW81AD",
  companyNumber: "15665772",
  verificationUrl: "www.eucert.co.uk",
  verificationEmail: "info@eucert.co.uk",
  scopeText: "TO PROMOTE HEALTHCARE, EDUCATION, EXTRA-CURRICULAR, COCURRICULAR ACTIVITIES, SPORTS, SOCIAL, URBAN AND RURAL EMPOWERMENT ON NON PROFIT BASIS WORKING WITH GOVERNMENT AND NONGOVERNMENT ORGANIZATION AND ALL THE SECTIONS OF SOCIETY, JOB PROVIDED. DRINKING WATER RESOURCES. SOLAR PENEL. NAPKIN PAD. HEALTH DISCOUNT CARD. MAN WOMEN EMPOWERMENT. FREE HEALTH CHECKUP CAMP. OLD-AGE HOME. MEDICAL TOURISM."
};

export const NGO_PROGRAMS: ProgramItem[] = [
  {
    id: "free-health-camps",
    title: "Free Health Checkup Camps & Mobile Clinics",
    category: "healthcare",
    badge: "Healthcare Priority",
    summary: "Delivering free diagnostic screenings, general physician consultations, eye exams, and essential medicines directly to remote villages.",
    description: "Our mobile medical units regularly visit remote hamlets in Tapan, Daralhat, and surrounding South Dinajpur districts. We screen for hypertension, diabetes, anemia, eye ailments, and provide free pediatric and geriatric healthcare along with prescription medicines.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    metrics: "120+ Camps Conducted • 38,000+ Patients Treated",
    keyHighlights: [
      "Free Blood Sugar, Hemoglobin & ECG screening",
      "Free distribution of doctor-prescribed vital drugs",
      "Specialist Pediatric & Gynecology consultations",
      "Free Eye checkups and distribution of reading spectacles"
    ],
    callToAction: "Book Camp Appointment"
  },
  {
    id: "health-discount-card",
    title: "Sumi Care Health Discount Card",
    category: "healthcare",
    badge: "Flagship Service",
    summary: "Subsidized healthcare card granting 20% to 50% discount across partnered diagnostic centers, pharmacies, pathology labs, and hospitals.",
    description: "Designed to relieve rural families from catastrophic out-of-pocket healthcare expenses. Beneficiaries receive a digital and physical photo ID card verified across our network of private and charitable medical providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    metrics: "15,400+ Cards Distributed • 60+ Partner Facilities",
    keyHighlights: [
      "Up to 40% discount on MRI, CT Scan, Ultrasound & Pathology",
      "15% to 25% discount on all life-saving prescription medicines",
      "Priority OPD booking and discounted consultation fees",
      "Free annual baseline health checkup included"
    ],
    callToAction: "Apply for Card"
  },
  {
    id: "clean-drinking-water",
    title: "Drinking Water Resources & Purification Plants",
    category: "environment",
    badge: "Clean Water Initiative",
    summary: "Deep-bore community tube wells and arsenic-iron removal filtration units ensuring safe, pathogen-free water for rural households.",
    description: "Access to clean water is a fundamental human right. Sumi Care Foundation installs solar-powered deep bore wells and community gravity-fed filtration stations in water-scarce areas of South Dinajpur to curb waterborne illnesses.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    metrics: "85+ Water Plants Installed • 45,000+ Daily Consumers",
    keyHighlights: [
      "Heavy metal, arsenic & iron removal filtration systems",
      "Solar powered submersible pumps with overhead clean storage",
      "Zero cost clean drinking water kiosks in rural markets & schools",
      "Regular bacteriological water quality testing"
    ],
    callToAction: "Sponsor a Tube Well"
  },
  {
    id: "solar-energy-panel",
    title: "Solar Panel & Renewable Rural Electrification",
    category: "environment",
    badge: "Green Energy",
    summary: "Distributing solar study lamps, installing solar street lighting, and powering village community halls & primary schools.",
    description: "Combatting energy poverty through eco-friendly solar solutions. We install solar street lighting poles on dark rural lanes to enhance safety for women and girls, and equip school children with solar study lamps.",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    metrics: "1,200+ Solar Units • 35 Village Streets Illuminated",
    keyHighlights: [
      "Solar streetlights in previously unlit rural intersections",
      "Solar lanterns for high-school students preparing for Board exams",
      "Off-grid solar power for primary health centers and study centers",
      "Maintenance training for local youth to service solar kits"
    ],
    callToAction: "Support Green Energy"
  },
  {
    id: "napkin-pad-distribution",
    title: "Sanitary Napkin Distribution & Menstrual Hygiene",
    category: "empowerment",
    badge: "Women's Health",
    summary: "Promoting dignity and reproductive health through free sanitary napkin distribution drives and school menstrual health awareness.",
    description: "Breaking menstrual taboos and preventing reproductive tract infections. Sumi Care Foundation regularly distributes biodegradable sanitary pads to adolescent girls in rural schools and conducts educational hygiene sessions.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    metrics: "50,000+ Pad Packs Distributed • 48 Schools Covered",
    keyHighlights: [
      "Free monthly sanitary pad kits to rural schoolgirls and BPL mothers",
      "Doctor-led interactive menstrual health and puberty seminars",
      "Eco-friendly incinerators installed in government secondary schools",
      "Women Self-Help Groups (SHGs) trained in low-cost pad manufacturing"
    ],
    callToAction: "Sponsor Hygiene Kits"
  },
  {
    id: "man-women-empowerment-jobs",
    title: "Men & Women Empowerment & Job Placement",
    category: "empowerment",
    badge: "Livelihood & Careers",
    summary: "Vocational skill development, sewing centers, computer literacy, and formal job placement linkages for rural youth.",
    description: "Bridging the unemployment gap by providing actionable, market-aligned vocational training. We run tailoring & apparel design centers for women, electrical & smartphone repair workshops for youth, with direct employer hiring connections.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    metrics: "3,200+ Youth Trained • 1,850+ Direct Jobs Provided",
    keyHighlights: [
      "Free Sewing & Tailoring training certificate programs",
      "Basic & Advanced Computer Literacy labs (Tally, MS Office, DTP)",
      "Dedicated Job Placement Cell partnering with regional MSMEs",
      "Micro-entrepreneurship startup kits for women artisans"
    ],
    callToAction: "Apply for Training / Job"
  },
  {
    id: "education-sports",
    title: "Education, Sports & Extra-Curricular Activities",
    category: "education",
    badge: "Youth Development",
    summary: "Free remedial coaching, distribution of textbooks & stationery, and annual rural athletics & football tournaments.",
    description: "Nurturing the academic and athletic talents of grassroots children. We run free evening study centers, sponsor needy students' school fees, and organize football, kabaddi, and athletic meets.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    metrics: "4,500+ Children Enrolled • 24 Sports Meets Organized",
    keyHighlights: [
      "Free daily coaching centers for Math, Science & English",
      "Annual Sumi Care Champions Trophy (Football & Athletics)",
      "Free distribution of backpacks, geometry boxes, and textbooks",
      "Cultural arts, music, and debate workshops"
    ],
    callToAction: "Sponsor a Student"
  },
  {
    id: "old-age-home",
    title: "Old-Age Home & Dignified Senior Care",
    category: "elderly",
    badge: "Senior Citizen Welfare",
    summary: "Safe shelter, warm nutritious meals, round-the-clock nursing care, and heartfelt companionship for destitute elderly citizens.",
    description: "Providing a peaceful sanctuary for abandoned and destitute elderly individuals. Our home offers hygienic living quarters, regular geriatric medical checkups, spiritual spaces, and affectionate care.",
    image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=800&q=80",
    metrics: "60+ Resident Elders • 24/7 Medical Care",
    keyHighlights: [
      "Wholesome customized geriatric nutrition plan (3 meals + snacks)",
      "Daily on-site nurse monitoring and weekly physician rounds",
      "Recreational hall, television lounge, and devotional reading library",
      "Palliative and end-of-life compassionate care support"
    ],
    callToAction: "Sponsor an Elder"
  },
  {
    id: "medical-tourism",
    title: "Medical Tourism & Super-Specialist Care Facilitation",
    category: "special",
    badge: "Advanced Healthcare",
    summary: "Guiding patients from remote Bengal villages to premier tertiary hospitals in Kolkata, Delhi, Bangalore, and South India.",
    description: "When complex cardiac, oncology, or neurological surgeries are needed, our Medical Tourism desk coordinates hospital admissions, discounted surgical quotes, patient transit, and accommodation for attendants.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    metrics: "420+ Complex Surgeries Facilitated",
    keyHighlights: [
      "Direct tie-ups with leading super-specialty hospital chains",
      "Dedicated medical social worker assigned to patient families",
      "Logistics, ambulance transit, and subsidized guest-house stays",
      "Assistance with Chief Minister / PM Relief Fund medical applications"
    ],
    callToAction: "Get Medical Guidance"
  },
  {
    id: "govt-ngo-partnership",
    title: "Government & NGO Collaborative Projects",
    category: "special",
    badge: "Public-Private Synergy",
    summary: "Partnering with West Bengal State departments, Panchayats, and national CSR foundations to maximize grassroots impact.",
    description: "We work hand-in-hand with Block Development Offices (BDO), Gram Panchayats, District Health Societies, and corporate CSR wings to implement Swachh Bharat, Ayushman / Swasthya Sathi assistance, and disaster relief.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    metrics: "18+ Collaborative MoUs • 100% Transparent Audits",
    keyHighlights: [
      "Execution partner for District Health & Family Welfare programs",
      "Gram Panchayat level water & sanitation auditing",
      "Corporate CSR project design, compliance & field execution",
      "ISO 9001:2015 certified quality standard reporting"
    ],
    callToAction: "Partner with Us"
  }
];

export const UPCOMING_HEALTH_CAMPS: HealthCamp[] = [
  {
    id: "camp-01",
    title: "Mega Rural Health & Eye Screening Camp",
    location: "Daralhat Primary Health Complex Ground",
    village: "Daralhat, Tapan, South Dinajpur",
    date: "15 September 2026",
    time: "09:00 AM - 04:00 PM",
    specialists: ["General Physician", "Ophthalmologist", "Cardiologist", "Gynecologist"],
    services: ["Free Blood Tests", "Eye Pressure Check", "Free Medicine Kit", "Health Card Enrollment"],
    slotsAvailable: 140,
    contactPerson: "Dr. A. Mondal (Camp Incharge)"
  },
  {
    id: "camp-02",
    title: "Women & Child Nutrition & Anemia Screening",
    location: "Jaminishinta Hathko Community Center",
    village: "Jaminishinta, PO Daralhat, South Dinajpur",
    date: "28 September 2026",
    time: "10:00 AM - 03:30 PM",
    specialists: ["Pediatrician", "Gynecologist", "Dietician"],
    services: ["Hemoglobin Test", "Sanitary Pad Distribution", "Iron Supplement Kits", "Pediatric Growth Monitoring"],
    slotsAvailable: 95,
    contactPerson: "Smt. P. Das (Coordinator)"
  },
  {
    id: "camp-03",
    title: "Geriatric & Diabetic Specialty Camp",
    location: "Sumi Care Foundation Senior Care Wing",
    village: "Tapan Block, South Dinajpur",
    date: "12 October 2026",
    time: "09:30 AM - 02:30 PM",
    specialists: ["Endocrinologist", "Physiotherapist", "Geriatric Specialist"],
    services: ["HbA1c Sugar Test", "Arthritis Joint Consultation", "Physiotherapy Demo", "Discount Card Issuance"],
    slotsAvailable: 110,
    contactPerson: "Mr. B. Roy (Secretary)"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Free Rural Health Camp & Blood Testing in Daralhat",
    category: "Healthcare",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    location: "Daralhat, Tapan",
    date: "July 2026",
    description: "Doctor examining elderly villager during our weekly free health checkup camp."
  },
  {
    id: "gal-2",
    title: "Solar Panel & Street Lighting Installation",
    category: "Solar Energy",
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    location: "Jaminishinta Hathko",
    date: "August 2026",
    description: "Erecting solar street light units on dark rural crossroads for community safety."
  },
  {
    id: "gal-3",
    title: "Deep-Bore Clean Water Filtration Plant Launch",
    category: "Clean Water",
    imageUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    location: "Tapan Sector",
    date: "June 2026",
    description: "Villagers accessing clean, iron-free purified drinking water from the new community plant."
  },
  {
    id: "gal-4",
    title: "Women Vocational Sewing & Tailoring Lab",
    category: "Empowerment",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    location: "Daralhat Skill Center",
    date: "August 2026",
    description: "Rural women mastering apparel design to become self-reliant micro-entrepreneurs."
  },
  {
    id: "gal-5",
    title: "Sanitary Napkin Distribution in Girls High School",
    category: "Hygiene",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    location: "South Dinajpur",
    date: "May 2026",
    description: "Educating teenage girls on menstrual health and providing free annual hygiene kits."
  },
  {
    id: "gal-6",
    title: "Annual Rural Football & Athletics Championship",
    category: "Sports & Youth",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    location: "Tapan Sports Ground",
    date: "January 2026",
    description: "Youth participating in inter-village sports to encourage physical fitness and discipline."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Anjali Karmakar",
    role: "Health Discount Card Beneficiary",
    location: "Daralhat, South Dinajpur",
    quote: "When my father needed urgent gallbladder surgery, the Sumi Care Health Discount Card saved us over ₹22,000 in diagnostics and hospital charges. The foundation volunteers guided us through every step.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    impactArea: "Healthcare"
  },
  {
    id: "t-2",
    name: "Subhashis Paul",
    role: "Village Pradhan & Farmer",
    location: "Jaminishinta, Tapan",
    quote: "The solar street lights and deep clean-water station installed by Sumi Care Foundation transformed our village. Waterborne stomach infections among our children dropped noticeably within months.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    impactArea: "Clean Water & Solar"
  },
  {
    id: "t-3",
    name: "Rekha Mahato",
    role: "Tailoring Batch Graduate & Tailor",
    location: "South Dinajpur",
    quote: "I received 3 months of free sewing training and a startup kit from Sumi Care Foundation. Today I earn ₹8,000 a month stitched garments from home and pay for my daughter's English medium school fees.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80",
    impactArea: "Women Empowerment"
  }
];

export const NETWORK_HOSPITALS = [
  { name: "Apex Multi-Specialty Hospital & Diagnostic Hub", location: "Balurghat, South Dinajpur", discount: "30% on OPD & Lab, 15% on IPD" },
  { name: "Sanjivani Lifeline Hospital", location: "Gangarampur, South Dinajpur", discount: "35% on Pathology & Radiology" },
  { name: "Care Point Advanced Pathology & Scan Center", location: "Malda Town", discount: "40% on MRI & CT Scan" },
  { name: "Mother & Child Care Polyclinic", location: "Tapan", discount: "25% on Pediatric & Gynec Consultations" },
  { name: "Kolkata Metro Super-Speciality Referral Center", location: "Kolkata Hub (Medical Tourism Desk)", discount: "Dedicated NGO Tariff Package" }
];
