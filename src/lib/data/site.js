/**
 * Site-wide constants.
 * Centralized so changes to nav, contact info, or partners stay in one place.
 */

export const site = {
  name: 'FO Permian',
  legalName: 'FO Permian Partners',
  tagline: 'Off-grid power for AI infrastructure',
  url: 'https://www.fopermian.com',
  description:
    'FO Permian delivers off-grid natural gas power with battery storage for hyperscale data centers in the Permian Basin — 99.999% uptime, scalable to gigawatts, with no ERCOT interconnection.',
  contact: {
    email: 'jose@fopermian.com',
    phone: '+1 432-559-2076',
    phoneDisplay: '+1 (432) 559-2076',
    hours: 'Weekdays, 8am–5pm CST'
  }
};

export const nav = [
  { label: 'Platform', href: '/#platform' },
  { label: 'Advantage', href: '/#advantage' },
  { label: 'Partners', href: '/#partners' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/#contact' }
];

export const partners = [
  {
    name: 'HiVolt Energy',
    role: 'Independent Power Producer',
    blurb:
      'Texas-based IPP specializing in the development, ownership, and operations of isolated and utility-connected microgrids.',
    contact: 'info@hivoltenergy.com'
  }
];

export const leadership = [
  {
    name: 'Davis Farish',
    role: 'Co-Founder'
  },
  {
    name: 'Jose Ortega',
    role: 'Co-Founder'
  }
];
