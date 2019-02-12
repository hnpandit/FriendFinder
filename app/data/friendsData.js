// ===============================================================================
// DATA
// Below data will hold all friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    "name":"George",
    "photo":"photo",
    "scores":[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  },
  {
    "name":"Abraham",
    "photo":"photo",
    "scores":[5, 4, 3, 2, 1, 5, 4, 3, 2, 1]
  },
  {
    "name":"Nancy",
    "photo":"photo",
    "scores":[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
  },
  {
    "name":"Lisa",
    "photo":"photo",
    "scores":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;