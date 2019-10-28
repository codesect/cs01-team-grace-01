const { phoneNumber, ratings } = require('./data');

module.exports = {
  Query: {
    getLatestRatings: (parent, args) => ratings.slice(0, args.max || 10),
    getRatings: () => phoneNumber,
  },
};
