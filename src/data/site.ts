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
  { label: 'Project Engineering', href: '/project-engineering' },
  { label: 'Plant Performance', href: '/plant-performance' },
  { label: 'Software', href: '/software' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
