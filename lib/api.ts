import { strapi } from '@strapi/client';

export const client = strapi({
  baseURL: 'https://helpful-flame-06c1187733.strapiapp.com/api',
  auth:
    process.env.NEXT_API_KEY ||
    '9a2127502ac8f5e42765bb47128d2f6a0eb5acc2e57cf60d510083798ad928bc9ab8185081b85cc8db2496b8b0eb7251223668965aa742edc38e5dbd52780fe8aa17fd598a8138cc013948221982d3ff43d69cd0c6cacb5325e8bb811504a4a4a39a3ff01bdfeba7da82ac04c9622cca5d46105f7cc072c7af32de2f363d1b2c',
});
