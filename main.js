var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  var planets1 = planets.reverse();

planets1.forEach(popList);

function popList(item) {
  var o = document.createElement("option");
  o.value = item[0];
  document.getElementById("planets").appendChild(o).textContent = item[0];
}

function calculateWeight(weight, planetName) {
  var planetName = document.getElementById("planets").selectedIndex;
  var newGravity = planets[planetName][1];
    
  return weight * newGravity;
}

function handleClickEvent() {
  var weight = parseFloat(document.getElementById("user-weight").value);
  var planetName = document.getElementById("planets").value;
  var result = calculateWeight(weight, planetName);
  document.getElementById("output").innerHTML = "If you were on " + planetName + ',' + ' you would weigh ' + result + 'lbs!';
 
}

function hidePluto() {
  $("select option:nth-child(11)").hide();
}

function showPluto() {
  $("select option:nth-child(11)").show();
}

function checkPluto() {
   if (document.getElementById("checkBox").checked) {
    hidePluto();
    console.log('checked')
  } else {
    showPluto();
    console.log('unchecked')
  }
}

function addNewPlanet() {
  var newPlanet = document.getElementById("newPlanet").value;
  var newMultiplier = document.getElementById("newMultiplier").value;
  planets.push([newPlanet, newMultiplier]);
  var o = document.createElement("option");
  o.value = newPlanet;
  document.getElementById("planets").appendChild(o).textContent = newPlanet;
  document.getElementById("newPlanet").value = "";
  document.getElementById("newMultiplier").value = "";
}

