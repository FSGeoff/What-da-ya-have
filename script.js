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
				"nearby restaurants: " +
					response.nearby_restaurants[i].restaurant.name
			);
			console.log(
				"Address: " +
					response.nearby_restaurants[i].restaurant.location.address
			);

			console.log(
				"Average cost for two: " +
					response.nearby_restaurants[i].restaurant
						.average_cost_for_two
			);
			// console.log("Menu: " + response.restaurant);
			console.log(
				"Specialty Dish: " +
					response.nearby_restaurants[i].restaurant.cuisines
			);

			console.log(
				"url: " + response.nearby_restaurants[i].restaurant.url
			);
			console.log("_____________________________________________");
			console.log("_____________________________________________");
		}
	});

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
});
