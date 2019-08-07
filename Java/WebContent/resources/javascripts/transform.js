function transform(stateData, eventData) {
	var verticesArray = [];
	var edgesArray = [];
	var endStates = [];
	var startState;

	for ( var state in stateData) {
		let behArray = [];

		let stopChecked = false;

		if (stateData[state] == null)
			continue;

		for ( var beh in stateData[state].behaviourArray) {

			let specificBehaviour = stateData[state].behaviourArray[beh].behaviourType;
			let setTime;
			let time = stateData[state].behaviourArray[beh].time;

			switch (specificBehaviour) {
			case "Forward":
			case "Backward":
				setTime = time * 40;
				break;

			case "Turn Right":
			case "Turn Left":
				setTime = Math.floor(time * 6.3);
				break;
				
			case "Spin":
				setTime = Math.floor(time*4.5);
				break;

			default:
				setTime = time;

			}

			behArray.push({
				behaviour : specificBehaviour,
				time : setTime
			});

			if (specificBehaviour == "Stop" && !stopChecked) {
				stopChecked = true;
				endStates.push(String.fromCharCode(65 + stateData[state]._id));
			}

		}

		verticesArray.push({
			name : String.fromCharCode(65 + stateData[state]._id),
			robotActions : behArray
		});
	}

	for ( var state in stateData) {
		if (stateData[state] != null) {
			startState = stateData[state];
			break;
		}
	}

	for ( var event in eventData) {
		let c;
		let input;

		switch (eventData[event].label) {
		case "No Obstacle":
			c = "n";
			input = "NoObstacle";
			break;
		case "Obstacle Right":
			c = "r";
			input = "ObstacleR";
			break;
		case "Obstacle Left":
			c = "l";
			input = "ObstacleL";
			break;
		case "Obstacle Center":
			c = "a";
			input = "ObstacleAll"
			break;
		default:
			c = "s";
			input = "light";
			break;
		}

		let from = String.fromCharCode(65 + eventData[event].fromState);
		let to = String.fromCharCode(65 + eventData[event].toState);

		edgesArray.push({
			event : {
				name : from + c,
				input : input
			},
			fromState : from,
			toState : to

		})

	}

	var jsonOutput = {

		vertices : verticesArray,
		edges : edgesArray,
		startState : String.fromCharCode(65 + startState["_id"]),
		endStates : endStates

	}

	return jsonOutput;

}
