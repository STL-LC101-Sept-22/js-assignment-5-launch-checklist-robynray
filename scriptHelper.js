// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget")
    div.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}  </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    // list.style.visibility = "hidden"
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number.testInput)) {
        return "Not a Number";
    } else if (!isNaN(Number.testInput)) {
        return "Is a Number";
    }

}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // document.getElementById("list").style.visibility = "hidden"
    let pilotStatus = document.getElementById("pilotStatus")
    let copilotStatus = document.getElementById("copilotStatus")
    let fuelStatus = document.getElementById("fuelStatus")
    let cargoStatus = document.getElementById("cargoStatus")
    let launchStatus = document.getElementById("launchStatus");
    list.style.visibility = "hidden";

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields required!");
        // list.style.visibility = "hidden"


    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Enter valid input for each field"); {
            //     list.style.visibility = "hidden"
            // 
        }

    } else {
        list.style.visibility = "hidden"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
        // 

        if (fuelLevel >= 10000) {
            list.style.visibility = "hidden";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }
        if (fuelLevel < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        }
        if (cargoLevel <= 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
        }

        if (cargoLevel > 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        }

        if (cargoLevel > 10000 && fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
        }

        if (cargoLevel <= 10000 && fuelLevel < 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            list.style.visibility = "visible";
            launchStatus.style.color = "rgb(199, 37, 78)";
            // }else{
            //     list.style.visibility = "hidden";

            // document.getElementById("cargoLevel")
            // launchStatus.innerHTML = "Shuttle is Ready for Launch";
            // launchStatus.style.color = "rgb(65, 159, 106)"
        }
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();

    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let pickPlanetrandom = Math.floor(Math.random() * planets.length);
    return planets[pickPlanetrandom];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

