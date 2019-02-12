// ===============================================================================
// DATA
// Below data will hold all friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var NUM_QUESTIONS = 3;

var friendsArray = [
  {
    "name":"George",
    "photo":"photo",
    "scores":[5,4,2]
  },
  {
    "name":"Abraham",
    "photo":"photo",
    "scores":[1,4,5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;