export const config = {
  siteName: 'OrganicEats',
  description: 'Fresh organic produce delivered to your door',
  contactEmail: 'support@organiceats.com',
  socialLinks: {
    facebook: 'https://facebook.com/organiceats',
    instagram: 'https://instagram.com/organiceats',
    twitter: 'https://twitter.com/organiceats',
  },
  deliveryHours: {
    start: '08:00',
    end: '20:00',
  },
  timeSlots: [
    '08:00-10:00',
    '10:00-12:00',
    '12:00-14:00',
    '14:00-16:00',
    '16:00-18:00',
    '18:00-20:00',
  ],
} as const;