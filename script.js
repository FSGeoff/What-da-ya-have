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
		console.log(response.link);
		for (let i = 0; i < response.nearby_restaurants.length; i++) {
			console.log(response.nearby_restaurants[i]);
			console.log(response.nearby_restaurants[i].restaurant.name);
			console.log(response.nearby_restaurants[i].restaurant.url);
		}
	});
});
