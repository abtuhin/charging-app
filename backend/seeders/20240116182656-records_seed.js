'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cdrs', [{
      end: "2024-01-16 19:30:02.530",
      sessionId: 1,
      start: "2024-01-16 19:25:02.530",
      totalCost: 838,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 19:35:02.530",
      sessionId: 2,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1250,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 19:40:02.530",
      sessionId: 3,
      start: "2024-01-16 19:35:02.530",
      totalCost: 642,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 19:45:02.530",
      sessionId: 4,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1101,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 19:50:02.530",
      sessionId: 5,
      start: "2024-01-16 19:35:02.530",
      totalCost: 585,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 19:55:02.530",
      sessionId: 6,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1106,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 20:00:02.530",
      sessionId: 7,
      start: "2024-01-16 19:30:02.530",
      totalCost: 889,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 20:05:02.530",
      sessionId: 8,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1214,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 20:10:02.530",
      sessionId: 9,
      start: "2024-01-16 19:40:02.530",
      totalCost: 745,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 20:15:02.530",
      sessionId: 10,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1164,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 20:20:02.530",
      sessionId: 11,
      start: "2024-01-16 19:35:02.530",
      totalCost: 736,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 20:25:02.530",
      sessionId: 12,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1202,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 20:30:02.530",
      sessionId: 13,
      start: "2024-01-16 19:30:02.530",
      totalCost: 580,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 20:35:02.530",
      sessionId: 14,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1109,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 20:40:02.530",
      sessionId: 15,
      start: "2024-01-16 19:40:02.530",
      totalCost: 882,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 20:45:02.530",
      sessionId: 16,
      start: "2024-01-16 19:30:02.530",
      totalCost: 510,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 20:50:02.530",
      sessionId: 17,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1308,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 20:55:02.530",
      sessionId: 18,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1042,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 21:00:02.530",
      sessionId: 19,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1404,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 21:05:02.530",
      sessionId: 20,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1283,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 21:10:02.530",
      sessionId: 21,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1129,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 21:15:02.530",
      sessionId: 22,
      start: "2024-01-16 19:30:02.530",
      totalCost: 700,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 21:20:02.530",
      sessionId: 23,
      start: "2024-01-16 19:35:02.530",
      totalCost: 709,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 21:25:02.530",
      sessionId: 24,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1313,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 21:30:02.530",
      sessionId: 25,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1178,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 21:35:02.530",
      sessionId: 26,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1306,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 21:40:02.530",
      sessionId: 27,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1295,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 21:45:02.530",
      sessionId: 28,
      start: "2024-01-16 19:30:02.530",
      totalCost: 530,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 21:50:02.530",
      sessionId: 29,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1125,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 21:55:02.530",
      sessionId: 30,
      start: "2024-01-16 19:40:02.530",
      totalCost: 552,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 22:00:02.530",
      sessionId: 31,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1030,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 22:05:02.530",
      sessionId: 32,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1064,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 22:10:02.530",
      sessionId: 33,
      start: "2024-01-16 19:40:02.530",
      totalCost: 736,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 22:15:02.530",
      sessionId: 34,
      start: "2024-01-16 19:30:02.530",
      totalCost: 681,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 22:20:02.530",
      sessionId: 35,
      start: "2024-01-16 19:35:02.530",
      totalCost: 690,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 22:25:02.530",
      sessionId: 36,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1318,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 22:30:02.530",
      sessionId: 37,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1349,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 22:35:02.530",
      sessionId: 38,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1171,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 22:40:02.530",
      sessionId: 39,
      start: "2024-01-16 19:40:02.530",
      totalCost: 568,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 22:45:02.530",
      sessionId: 40,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1131,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 22:50:02.530",
      sessionId: 41,
      start: "2024-01-16 19:35:02.530",
      totalCost: 911,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 22:55:02.530",
      sessionId: 42,
      start: "2024-01-16 19:40:02.530",
      totalCost: 539,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 23:00:02.530",
      sessionId: 43,
      start: "2024-01-16 19:30:02.530",
      totalCost: 882,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 23:05:02.530",
      sessionId: 44,
      start: "2024-01-16 19:35:02.530",
      totalCost: 543,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 23:10:02.530",
      sessionId: 45,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1358,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 23:15:02.530",
      sessionId: 46,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1171,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 23:20:02.530",
      sessionId: 47,
      start: "2024-01-16 19:35:02.530",
      totalCost: 644,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 23:25:02.530",
      sessionId: 48,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1213,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 23:30:02.530",
      sessionId: 49,
      start: "2024-01-16 19:30:02.530",
      totalCost: 561,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 23:35:02.530",
      sessionId: 50,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1447,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 23:40:02.530",
      sessionId: 51,
      start: "2024-01-16 19:40:02.530",
      totalCost: 582,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-16 23:45:02.530",
      sessionId: 52,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1410,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-16 23:50:02.530",
      sessionId: 53,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1469,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-16 23:55:02.530",
      sessionId: 54,
      start: "2024-01-16 19:40:02.530",
      totalCost: 906,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 00:00:02.530",
      sessionId: 55,
      start: "2024-01-16 19:30:02.530",
      totalCost: 938,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 00:05:02.530",
      sessionId: 56,
      start: "2024-01-16 19:35:02.530",
      totalCost: 726,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 00:10:02.530",
      sessionId: 57,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1474,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 00:15:02.530",
      sessionId: 58,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1356,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 00:20:02.530",
      sessionId: 59,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1168,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 00:25:02.530",
      sessionId: 60,
      start: "2024-01-16 19:40:02.530",
      totalCost: 575,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 00:30:02.530",
      sessionId: 61,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1288,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 00:35:02.530",
      sessionId: 62,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1357,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 00:40:02.530",
      sessionId: 63,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1083,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 00:45:02.530",
      sessionId: 64,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1104,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 00:50:02.530",
      sessionId: 65,
      start: "2024-01-16 19:35:02.530",
      totalCost: 625,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 00:55:02.530",
      sessionId: 66,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1176,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 01:00:02.530",
      sessionId: 67,
      start: "2024-01-16 19:30:02.530",
      totalCost: 721,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 01:05:02.530",
      sessionId: 68,
      start: "2024-01-16 19:35:02.530",
      totalCost: 805,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 01:10:02.530",
      sessionId: 69,
      start: "2024-01-16 19:40:02.530",
      totalCost: 692,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 01:15:02.530",
      sessionId: 70,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1238,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 01:20:02.530",
      sessionId: 71,
      start: "2024-01-16 19:35:02.530",
      totalCost: 685,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 01:25:02.530",
      sessionId: 72,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1376,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 01:30:02.530",
      sessionId: 73,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1189,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 01:35:02.530",
      sessionId: 74,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1230,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 01:40:02.530",
      sessionId: 75,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1209,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 01:45:02.530",
      sessionId: 76,
      start: "2024-01-16 19:30:02.530",
      totalCost: 540,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 01:50:02.530",
      sessionId: 77,
      start: "2024-01-16 19:35:02.530",
      totalCost: 563,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 01:55:02.530",
      sessionId: 78,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1095,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 02:00:02.530",
      sessionId: 79,
      start: "2024-01-16 19:30:02.530",
      totalCost: 724,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 02:05:02.530",
      sessionId: 80,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1490,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 02:10:02.530",
      sessionId: 81,
      start: "2024-01-16 19:40:02.530",
      totalCost: 808,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 02:15:02.530",
      sessionId: 82,
      start: "2024-01-16 19:30:02.530",
      totalCost: 791,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 02:20:02.530",
      sessionId: 83,
      start: "2024-01-16 19:35:02.530",
      totalCost: 778,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 02:25:02.530",
      sessionId: 84,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1495,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 02:30:02.530",
      sessionId: 85,
      start: "2024-01-16 19:30:02.530",
      totalCost: 568,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 02:35:02.530",
      sessionId: 86,
      start: "2024-01-16 19:35:02.530",
      totalCost: 1182,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 02:40:02.530",
      sessionId: 87,
      start: "2024-01-16 19:40:02.530",
      totalCost: 726,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 02:45:02.530",
      sessionId: 88,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1246,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 02:50:02.530",
      sessionId: 89,
      start: "2024-01-16 19:35:02.530",
      totalCost: 531,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 02:55:02.530",
      sessionId: 90,
      start: "2024-01-16 19:40:02.530",
      totalCost: 586,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 03:00:02.530",
      sessionId: 91,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1228,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 03:05:02.530",
      sessionId: 92,
      start: "2024-01-16 19:35:02.530",
      totalCost: 800,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 03:10:02.530",
      sessionId: 93,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1322,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 03:15:02.530",
      sessionId: 94,
      start: "2024-01-16 19:30:02.530",
      totalCost: 1477,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 03:20:02.530",
      sessionId: 95,
      start: "2024-01-16 19:35:02.530",
      totalCost: 623,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 03:25:02.530",
      sessionId: 96,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1158,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 03:30:02.530",
      sessionId: 97,
      start: "2024-01-16 19:30:02.530",
      totalCost: 935,
      vehicleId: "PORSCHE1"
    }, {
      end: "2024-01-17 03:35:02.530",
      sessionId: 98,
      start: "2024-01-16 19:35:02.530",
      totalCost: 525,
      vehicleId: "BMW2"
    }, {
      end: "2024-01-17 03:40:02.530",
      sessionId: 99,
      start: "2024-01-16 19:40:02.530",
      totalCost: 1246,
      vehicleId: "AUDI3"
    }, {
      end: "2024-01-17 03:45:02.530",
      sessionId: 100,
      start: "2024-01-16 19:30:02.530",
      totalCost: 551,
      vehicleId: "PORSCHE1"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cdrs', null, {});
  }
};
