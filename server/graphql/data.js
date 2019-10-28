const faker = require('faker');

faker.locale = 'en_GB';

const callTypes = [
  'telemarketer',
  'call centre',
  'financial services',
  'debt collector',
  'company',
  'service',
  'non-profit organization',
  'survey',
  'nuisance call',
  'unsolicited call',
  'political call',
  'scam call',
  'prank call',
  'other',
];

let ratings = [
  {
    _id: faker.random.uuid(),
    author: faker.name.firstName('male'),
    caller: 'Unknown',
    callType: faker.random.arrayElement(callTypes),
    message:
      'Ah! Fed up with these muppets. Can they not be fined heavily and disconnected?',
    number: {
      number: '01160097800',
    },
    score: 2,
    createdAt: new Date() - 13 * 24 * 15 * 39 * 1000,
  },
  {
    _id: faker.random.uuid(),
    author: faker.name.firstName('female'),
    caller: 'Unknown',
    callType: 'scam call',
    message:
      'Scam! A diet pill trial for £3.95 plus they took an extra £2.00 unauthorised. I tried called and guessed I would pay more for phone call. Then noticed two payments on 10 Oct on my account for £85 and £89 and they set this up without any authority from me! This is shocking. Vitamix is the name and I have no doubt the tablets are probably fake too!',
    number: {
      number: '01160097800',
    },
    score: 1,
    createdAt: new Date() - 21 * 12 * 43 * 1000,
  },
];

for (let i = 0; i < 20; i++) {
  ratings.push({
    _id: faker.random.uuid(),
    author: faker.random.arrayElement([
      faker.name.findName(),
      faker.name.lastName(),
    ]),
    caller: faker.company.companyName(),
    callType: faker.random.arrayElement(callTypes),
    message: faker.lorem.paragraph(),
    number: {
      number: faker.phone.phoneNumber(),
    },
    score: faker.random.number({
      min: 1,
      max: 5,
    }),
    createdAt: faker.date.recent(5),
  });
}

ratings = ratings.sort((a, b) => b.createdAt - a.createdAt);

const phoneNumber = {
  _id: faker.random.uuid(),
  caller: ['Unknown'],
  callType: ['scam call', 'survey'],
  country: 'UK',
  number: '01160097800',
  ratings: ratings.filter(r => r.number.number === '01160097800'),
  score: 1.5,
  searches: faker.random.number({
    min: 70,
    max: 500,
  }),
};

module.exports = {
  phoneNumber,
  ratings,
};
