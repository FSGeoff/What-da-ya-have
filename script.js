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
