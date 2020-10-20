$(document).ready(function () {
	var getStation = JSON.parse(localStorage.getItem("buttonChoice"));

	// Array of objects. Holds all station names and longitude/latitude
	var trainStops = [
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

		{ station: "West End", longitude: "-84.41406", latitude: "33.73688" },

		{ station: "Lenox", longitude: "-84.356098", latitude: "33.846843" },
	];

	if (getStation) {
		restaurantCall(trainStops.longitude, trainStops.latitude);
	}

	function restaurantCall(lon, lat) {
		$("#rest-box").empty();
		$("#sel-trn").empty();

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

				// Create div to hold restaurant information
				var restDiv = $("<div>");
				restDiv.css("margin", "5 px");
				restDiv.css("background-color", "#d29a34");
				restDiv.css("border", "solid rgb(70, 155, 216) 2px");
				restDiv.css("border-radius", "10 px");
				restDiv.css("margin", "5px");
				restDiv.css("padding", "5px");
				restDiv.attr("id", "rest-div");

				// Create <h3> element for restaurant name
				var restName = $("<h3>");
				restName.attr("class", "rest-info");
				restName.attr("id", "rest-name");
				// restName.css("background-color", "#c1bbbb");
				// restName.css("color", "#0818dc");

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
				restLink.text("More Info");
				restDiv.append(restLink);

				$("#rest-box").append(restDiv);
			}
		});
	}

	function martaCall(stationSelected) {
		$.ajax({
			url:
				"https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=89d07faa-bc02-4484-99e9-7e6411db16ee",
			method: "GET",
		}).then(function (response) {
			var currentStation = $("<h4>");
			currentStation.attr("class", "station");
			currentStation.attr("id", "cur-sta");
			currentStation.text(stationSelected.toUpperCase() + " STATION");

			for (let i = 0; i < response.length; i++) {
				// Checks to see if station name in API matches name in trainStops.station
				if (
					response[i].STATION.toLowerCase()
						.substr(0, response[i].STATION.toLowerCase().length - 7)
						.trim() === stationSelected.toLowerCase()
				) {
					// Div to hold station name and time
					var stationDiv = $("<div>");
					stationDiv.attr("id", "sta-div");
					stationDiv.css("background-color", "#469bd8");
					stationDiv.css("color", "white");
					stationDiv.css("text-align", "center");
					stationDiv.css("border", "solid white 2 px");
					stationDiv.append(currentStation);

					// <p> element for next arrival time
					var timeAndDirection = $("<p>");
					timeAndDirection.attr("class", "time");
					timeAndDirection.attr("id", "tim-dir");
					timeAndDirection.text(
						"The next " +
							response[i].DIRECTION +
							" bound " +
							response[i].LINE +
							" line train will arrive @ " +
							response[i].NEXT_ARR.slice(0, 5)
					);
					stationDiv.append(timeAndDirection);
					$("#rest-box").append(stationDiv); //need div to append to!!!!
				}
			}
		});
	}
	$(".js-station").on("click", function () {
		var buttonChoice = $(this).text().trim();
		for (let i = 0; i < trainStops.length; i++) {
			if (trainStops[i].station === buttonChoice) {
				restaurantCall(trainStops[i].longitude, trainStops[i].latitude);
				localStorage.setItem("station", JSON.stringify(buttonChoice));
				var martaBtn = buttonChoice.toString();
				$("#select-train").empty();
				martaCall(martaBtn);
			}
		}
	});
});
