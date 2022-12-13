// Write your JavaScript code here!
// const { formSubmission, myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    //  list.style.visibility = "hidden";
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        // console.log(planet.moons, planet.image);
        addDestinationInfo(document, planet.name, planet.diameter, planet.distance, planet.star, planet.moons, planet.image);
    })
    const list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    const form = document.querySelector("form");



    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // list.style.visibility = "hidden";
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel =  parseInt(fuelLevelInput.value);
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = parseInt(cargoLevelInput.value);

        // let launchStatus = docoument.getElementById("launchStatus");

        // if (pilot.value === "" || copilot.value === "" || fuelLevel.valueOf === "" || cargoLevel.valueOf === "") {
        //     alert("All fields are required!");

        // } else { 
        // formSubmission().style.visibility = "hidden";
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)

        // === "Error") {
        // event.preventDefault();
    });
});


