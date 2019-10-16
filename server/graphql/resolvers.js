const ratings = [
  {
    _id: '1',
    author: 'Peter',
    caller: 'Unknown',
    callType: 'Survey',
    message:
      'Ah! Fed up with these muppets. Can they not be fined heavily and disconnected?',
    number: {
      number: '01160097800',
    },
    score: 2,
    createdAt: new Date() - 13 * 24 * 15 * 39 * 1000,
  },
  {
    _id: '2',
    author: 'Violet',
    caller: 'Unknown',
    callType: 'Scam',
    message:
      'Scam! A diet pill trial for £3.95 plus they took an extra £2.00 unauthorised. I tried called and guessed I would pay more for phone call. Then noticed two payments on 10 Oct on my account for £85 and £89 and they set this up without any authority from me! This is shocking. Vitamix is the name and I have no doubt the tablets are probably fake too!',
    number: {
      number: '01160097800',
    },
    score: 1,
    createdAt: new Date() - 21 * 12 * 43 * 1000,
  },
];

const phoneNumber = {
  _id: '1',
  caller: ['Unknown'],
  callType: ['Scam', 'Survey'],
  country: 'UK',
  number: '01160097800',
  ratings,
  score: 1.5,
  searches: 197,
};

module.exports = {
  Query: {
    getRatings: () => phoneNumber,
  },
};
