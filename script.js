// create index.html, script.js and css files

// link js and css to index.html

// declare global variables
var martaAPIkey = "1b88df3e-8bf3-472c-ae67-2497f94f1d0f";
var martaArray = [];
// create an array of objects of each Marta station and the match long/lat numbers (gold and green lines)

// start function to call marta to retrieve real time arrivals for train
$(document).ready(function () {
  // building api call
  var queryURL =
    "http://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1b88df3e-8bf3-472c-ae67-2497f94f1d0f";
  // "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=1b88df3e-8bf3-472c-ae67-2497f94f1d0f";

  // set marta api through ajax function
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    var objectCount = Object.keys(response).length;
    console.log("object count: " + objectCount);
    // var martaArray = new Array[objectCount]();

    // create an array of objects of each Marta station and the match long/lat numbers (gold and green lines)
    martaArray = response;
    console.log(martaArray);
    console.log(martaArray[0].DESTINATION);
    console.log(martaArray[0].STATION);
    console.log(martaArray[0].LINE);
    console.log(martaArray[0].WAITING_SECONDS);
  });

  //  revisit later to see if needed
  //   for (let i = 0; i < response.response.docs.length; i++) {
  //     $("id").text(docs[i]);
  //     console.log(docs);
  //   }
});

/* questions to team
1. how important is the lat and lon information?
2. if it is important, then how does this api get me this information?
*/
