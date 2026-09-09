export const site = {
  name: 'Waterna',
  legalName: 'Waterna Ltd',
  companyNumber: '13360186',
  tagline: 'Independent water and wastewater treatment consultancy',
  phone: '+44 7450 201927',
  phoneHref: 'tel:+447450201927',
  email: 'info@waterna.co.uk',
  address: {
    street: '12 Glenferness Ave',
    city: 'Bournemouth',
    postcode: 'BH4 9NG',
    country: 'United Kingdom',
  },
  linkedin: 'https://www.linkedin.com/company/waterna',
} as const;

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const;

export const services = [
  {
    slug: 'feasibility-studies',
    title: 'Feasibility Studies',
    summary:
      'Establish whether a treatment scheme is technically sound and financially worth building — before you commit capital.',
  },
  {
    slug: 'design-services',
    title: 'Design Services',
    summary:
      'Process and engineering design, from block flow diagrams and mass balances through to equipment specification and P&IDs.',
  },
  {
    slug: 'engineering-consultancy',
    title: 'Engineering Consultancy',
    summary:
      'Independent technical review, vendor-neutral equipment evaluation and design-stage support for your project team.',
  },
  {
    slug: 'hazop',
    title: 'HAZOP & Risk Studies',
    summary:
      'Structured hazard and operability studies, chaired independently, with actions tracked through to close-out.',
  },
  {
    slug: 'plant-optimisation',
    title: 'Plant Operation, Commissioning & Optimisation',
    summary:
      'Get an underperforming plant back within consent — or commission a new one properly the first time.',
  },
  {
    slug: 'training',
    title: 'Training',
    summary:
      'Practical operator and engineer training built around your plant, your consents and your control system.',
  },
] as const;
