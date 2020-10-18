$(document).ready(function () {
	function restaurantCall(lon, lat) {
		$("#rest-box").empty();
		const zCall = {
			async: true,
			crossDomain: true,
			url:
				"https://developers.zomato.com/api/v2.1/geocode?lat=" +
				lat +
				"&lon=" +
				lon,
			method: "GET",
			headers: {
				"user-key": "5c3b3a505188c7c86aa5ca5bf3a93cf9",
			},
		};
		$.ajax(zCall).done(function (response) {
			console.log(response);
			for (let i = 0; i < response.nearby_restaurants.length; i++) {
				var restArray = response.nearby_restaurants;
				console.log(
					"nearby restaurants: " + restArray[i].restaurant.name
				);
				console.log(
					"Address: " + restArray[i].restaurant.location.address
				);

				console.log(
					"Average cost for two: " +
						restArray[i].restaurant.average_cost_for_two
				);

				console.log(
					"Specialty Dish: " + restArray[i].restaurant.cuisines
				);

				console.log("url: " + restArray[i].restaurant.url);
				console.log("_____________________________________________");
				console.log("_____________________________________________");

				// Create div to hold restaurant information
				var restDiv = $("<div>");
				restDiv.attr("id", "rest-div");

				// Create <h3> element for restaurant name
				var restName = $("<h3>");
				restName.attr("class", "rest-info");
				restName.attr("id", "rest-name");
				restName.text(restArray[i].restaurant.name);
				restDiv.append(restName);

				// Create <p> element for restaurant address
				var restAddress = $("<p>");
				restAddress.attr("class", "rest-info");
				restAddress.attr("id", "rest-addr");
				restAddress.text(restArray[i].restaurant.location.address);
				restDiv.append(restAddress);

				// Create <p> element for restaurant average cost for 2
				restAvgCost = $("<p>");
				restAvgCost.attr("class", "rest-info");
				restAvgCost.attr("id", "rest-cost");
				restAvgCost.text(
					"Average cost for 2 people: $" +
						restArray[i].restaurant.average_cost_for_two
				);
				restDiv.append(restAvgCost);

				// Create <p> element for restaurant specialty dishes
				var restSpecialDish = $("<p>");
				restSpecialDish.attr("class", "rest-info");
				restSpecialDish.attr("id", "spec-dish");
				restSpecialDish.text(
					"Specializes in: " + restArray[i].restaurant.cuisines
				);
				restDiv.append(restSpecialDish);

				//Create <a> tag to route to Zamato Page link
				var restLink = $("<a>");
				restLink.attr("class", "rest-info");
				restLink.attr("href", restArray[i].restaurant.url);
				restLink.attr("id", "rest-link");
				restLink.text("Zamato Page");
				restDiv.append(restLink);

				$("#rest-box").append(restDiv);
			}
		});
	}

	// Array of objects. Holds all station names and longitude/latitude
	trainStops = [
		{ station: "Decatur", longitude: "-84.29485", latitude: "33.774784" },

		{
			station: "Inman Park",
			longitude: "-84.3628833784582",
			latitude: "33.753954",
		},

		{
			station: "Georgia State",
			longitude: "-84.38652",
			latitude: "33.750324",
		},
		{
			station: "King Memorial",
			longitude: "-84.37572",
			latitude: "33.75032",
		},

		{
			station: "Five Points",
			longitude: "-84.38972",
			latitude: "33.75233",
		},

		{
			station: "Peachtree Center",
			longitude: "-84.388023",
			latitude: "33.760342",
		},

		{ station: "Midtown", longitude: "-84.3866", latitude: "33.78146" },

		{ station: "North Ave", longitude: "-84.38731", latitude: "	33.774213" },

		{ station: "Buckhead", longitude: "-84.367737", latitude: "33.847462" },

		{ station: "Lenox", longitude: "-84.356098", latitude: "33.846843" },
	];

	$(".js-station").on("click", function () {
		var buttonChoice = $(this).text().trim();
		for (let i = 0; i < trainStops.length; i++) {
			if (trainStops[i].station === buttonChoice) {
				restaurantCall(trainStops[i].longitude, trainStops[i].latitude);
			}
		}
	});
});
