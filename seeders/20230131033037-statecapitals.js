'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('statecapitals', [
      {
        state: 'AL',
        capital: 'Montgomery',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'AK',
        capital: 'Juneau',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'AZ',
        capital: 'Phoenix',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'AR',
        capital: 'Little Rock',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'CA',
        capital: 'Sacramento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'CO',
        capital: 'Denver',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'CT',
        capital: 'Hartford',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'DE',
        capital: 'Dover',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'FL',
        capital: 'Tallahassee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'GA',
        capital: 'Atlanta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'HI',
        capital: 'Honolulu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'ID',
        capital: 'Boise',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'IL',
        capital: 'Springfield',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'IN',
        capital: 'Indianapolis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'IA',
        capital: 'Des Moines',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'KS',
        capital: 'Topeka',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'KY',
        capital: 'Frankfort',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'LA',
        capital: 'Baton Rouge',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'ME',
        capital: 'Augusta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MD',
        capital: 'Annapolis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MA',
        capital: 'Boston',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MI',
        capital: 'Lansing',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MN',
        capital: 'Saint Paul',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MS',
        capital: 'Jackson',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MO',
        capital: 'Jefferson City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'MT',
        capital: 'Helena',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NE',
        capital: 'Lincoln',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NV',
        capital: 'Carson City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NH',
        capital: 'Concord',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NJ',
        capital: 'Trenton',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NM',
        capital: 'Santa Fe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NY',
        capital: 'Albany',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'NC',
        capital: 'Raleigh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'ND',
        capital: 'Bismarck',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'OH',
        capital: 'Columbus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'OK',
        capital: 'Oklahoma City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'OR',
        capital: 'Salem',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'PA',
        capital: 'Harrisburg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'RI',
        capital: 'Providence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'SC',
        capital: 'Columbia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'SD',
        capital: 'Pierre',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'TN',
        capital: 'Nashville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'TX',
        capital: 'Austin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'UT',
        capital: 'Salt Lake City',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'VT',
        capital: 'Montpelier',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'VA',
        capital: 'Richmond',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'WA',
        capital: 'Olympia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'WV',
        capital: 'Charleston',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'WI',
        capital: 'Madison',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        state: 'WY',
        capital: 'Cheyenne',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('statecapitals', null, {});
  }
};
