// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of friends.
// ===============================================================================

var friendsData = require("../data/friendsData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) 
  {
    var i=0;
    var j=0;
    var strBestFriend;
    var bestScore=40;
    var totalScore=0;

    // Let's add you as one of the friends
    friendsData.push(req.body);

    // This is where I am putting logic to find best compatible friend
    for (i=0; i<friendsData.length-1; i++)
    {
      totalScore = 0;
      for (j=0; j<friendsData[i].scores.length; j++)
      {
        totalScore = totalScore + Math.abs(friendsData[friendsData.length-1].scores[j] - friendsData[i].scores[j])
      }
      
      if (totalScore < bestScore)
      {
          bestScore = totalScore;
          strBestFriend = friendsData[i].name;
      }
      console.log("best friend " + strBestFriend);
      console.log("best score " + bestScore);
      console.log("total score " + totalScore);
    }
    res.json(strBestFriend);
  });
};
