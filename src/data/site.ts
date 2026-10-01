export const site = {
  name: 'Waterna',
  legalName: 'Waterna Ltd',
  companyNumber: '13360186',
  tagline: 'Independent water and wastewater treatment consultancy',
  phone: '+44 7450 201927',
  phoneHref: 'tel:+447450201927',
  email: 'info@waterna.co.uk',
  /**
   * Trading office (Regus). Not the registered office, which Companies
   * House still holds separately; do not label this "registered office".
   */
  address: {
    street: '19 Oxford Road',
    city: 'Bournemouth',
    postcode: 'BH8 8GS',
    country: 'United Kingdom',
  },
  linkedin: 'https://www.linkedin.com/company/waterna',
} as const;

export const nav = [
  { label: 'Project Engineering', href: '/project-engineering' },
  { label: 'Plant Performance', href: '/plant-performance' },
  { label: 'Analytics Software', href: '/software' },
  { label: 'Sectors', href: '/sectors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;
