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
$(document).ready(function () {
  var latitude = "33.954600";
  var longitude = "-84.501590";

  const zCall = {
    async: true,
    crossDomain: true,
    url:
      "https://developers.zomato.com/api/v2.1/geocode?lat=" +
      latitude +
      "&lon=" +
      longitude,
    method: "GET",
    headers: {
      "user-key": "5c3b3a505188c7c86aa5ca5bf3a93cf9",
    },
  };

  $.ajax(zCall).done(function (response) {
    console.log(response);
    for (let i = 0; i < response.nearby_restaurants.length; i++) {
      // console.log(response.nearby_restaurants[i]);
      console.log(
        "nearby restaurants: " + response.nearby_restaurants[i].restaurant.name
      );
      console.log(
        "Address: " + response.nearby_restaurants[i].restaurant.location.address
      );

      console.log(
        "Average cost for two: " +
          response.nearby_restaurants[i].restaurant.average_cost_for_two
      );
      // console.log("Menu: " + response.restaurant);
      console.log(
        "Specialty Dish: " + response.nearby_restaurants[i].restaurant.cuisines
      );

      console.log("url: " + response.nearby_restaurants[i].restaurant.url);
      console.log("_____________________________________________");
      console.log("_____________________________________________");
    }
  });
});
