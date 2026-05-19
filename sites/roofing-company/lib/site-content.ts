export const site = {
  name: "Columbia Contracting Company",
  tagline:
    "Commercial and Residential Paving Construction with Values and Experience",
  description:
    "Maryland commercial and residential paving and construction contractor. Licensed MHIC #103935, Professional Engineer, and Notary Public serving Columbia and the greater Baltimore area.",
  url: "https://www.columbiacontracting.com",
} as const;

export const contact = {
  phone: "443-377-8368",
  phoneHref: "tel:+14433778368",
  email: "info@columbiacontracting.com",
  emailHref: "mailto:info@columbiacontracting.com",
  fax: "410-510-1012",
  address: {
    line: "Columbia, Maryland 21046",
    city: "Columbia",
    state: "MD",
    zip: "21046",
  },
} as const;

export const credentials = {
  mhic: "MHIC #103935",
  pe: "Professional Engineer (Maryland)",
  notary: "Notary Public",
  specialties: "Licensed paving & construction specialties",
} as const;

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const images = {
  heroPoster:
    "https://images.pexels.com/photos/3136904/pexels-photo-3136904.jpeg?auto=compress&cs=tinysrgb&w=1920",
  contactVisual:
    "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200",
  about:
    "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200",
  servicePaving:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  serviceResidential:
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
  serviceCommercial:
    "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200",
  serviceSiteWork:
    "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200",
  serviceRepairs:
    "https://images.pexels.com/photos/2218477/pexels-photo-2218477.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export const hero = {
  eyebrow: "Columbia, Maryland",
  headlineLine1: "Commercial & residential",
  headlineLine2: "contracting",
  headlineAccent: "built on integrity",
  subhead:
    "Licensed Maryland paving and construction with values, experience, and crews who show up ready to work.",
  primaryCta: "Request a quote",
  secondaryCta: "Call or text",
} as const;

export const whyChoose = {
  label: "Why choose us",
  title: "Built on integrity, delivered with discipline",
  items: [
    {
      title: "Integrity",
      description:
        "Honest scopes, clear estimates, and communication you can count on from first walkthrough to final compaction.",
    },
    {
      title: "Quality & safety",
      description:
        "Engineering-minded prep, proper base work, and site practices that protect your property and our crews.",
    },
    {
      title: "Local expertise",
      description:
        "Howard County and greater Baltimore—drainage, freeze-thaw, and traffic patterns we know by experience.",
    },
    {
      title: "Licensed & credentialed",
      description:
        "MHIC #103935, Professional Engineer oversight, and notary services under one trusted Maryland contractor.",
    },
  ],
} as const;

export const ctaBanner = {
  title: "Ready to start your project?",
  subtitle: "Call or text for a fast response and a free estimate.",
  cta: "Call 443-377-8368",
} as const;

export const about = {
  label: "About us",
  title: "Relationships, integrity, and skilled craftsmanship",
  paragraphs: [
    "Columbia Contracting Company brings decades of hands-on experience to commercial and residential paving projects across Maryland. We measure success by lasting partnerships—with property owners, municipalities, and the neighborhoods we help improve.",
    "Our team combines licensed expertise (MHIC #103935), professional engineering oversight, and notary services under one roof, so your project moves forward with clarity and accountability at every stage.",
    "From initial site evaluation through final compaction, we prioritize honest communication, fair estimates, and work that stands up to Maryland seasons.",
  ],
} as const;

export const services = [
  {
    id: "commercial-paving",
    title: "Commercial paving",
    description:
      "Parking lots, loading areas, and commercial drives engineered for heavy traffic and drainage requirements. Sealcoating, striping coordination, and phased work to minimize business disruption.",
    image: images.serviceCommercial,
    imageAlt: "Commercial paving crew at work on an asphalt surface",
  },
  {
    id: "residential-paving",
    title: "Residential paving",
    description:
      "Driveways, walkways, and private lanes installed with attention to grade, curb appeal, and long-term maintenance. We guide material choices suited to your property and budget.",
    image: images.serviceResidential,
    imageAlt: "Freshly paved residential driveway",
  },
  {
    id: "site-work",
    title: "Site work & construction",
    description:
      "Grading, excavation support, base preparation, and structural site work that sets the foundation for durable paving. Coordinated scheduling with your general contractor or project manager.",
    image: images.serviceSiteWork,
    imageAlt: "Construction site preparation and grading",
  },
  {
    id: "repairs-restoration",
    title: "Repairs & restoration",
    description:
      "Pothole repair, crack sealing, overlay sections, and restoration of worn surfaces—extending pavement life without full replacement when conditions allow.",
    image: images.serviceRepairs,
    imageAlt: "Worker repairing cracked asphalt pavement on a commercial lot",
  },
] as const;

export const buildStages = [
  "Foundation",
  "Frame",
  "Walls",
  "Roof",
  "Paving",
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consult & site review",
    description:
      "We walk the site, discuss scope, access, and timeline, and identify drainage, traffic, and permitting considerations.",
  },
  {
    step: "02",
    title: "Estimate & planning",
    description:
      "You receive a clear written estimate with material specs, phasing options, and realistic scheduling—no surprise line items.",
  },
  {
    step: "03",
    title: "Build & prep",
    description:
      "Excavation, base installation, and structural prep proceed with engineering discipline and daily communication.",
  },
  {
    step: "04",
    title: "Pave & finish",
    description:
      "Final paving, compaction, edges, and site cleanup—leaving a finished surface ready for use and seasonal maintenance.",
  },
] as const;

export const contactSection = {
  label: "Contact",
  title: "Start your project",
  description:
    "Call, text, or email Columbia Contracting Company. We respond to commercial and residential inquiries throughout Columbia, Howard County, and the greater Baltimore area.",
  formNote:
    "This form opens your email client for now—no account required. For urgent site issues, call directly.",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} Columbia Contracting Company. All rights reserved.`,
  licenseNote: "Maryland Home Improvement Commission licensed contractor.",
} as const;
