
function scuberGreetingForFeet(distance) {
  //test distance is less than 400
  if (distance <= 400) {
      return "This one is on me!";

//test distance is greater than 2000
} else if (distance > 400 && distance < 2000) {
  return "That will be twenty bucks.";
  } else if (distance >= 2000 && distance <= 2500) {
      return "I will gladly take your thirty bucks.";
      //test distance is greater than 2500
  } else if (distance > 2500) {
      return "No can do.";
      //test distance if valid distance is inputed
  } else {
      return "Invalid distance.";
  }
}

function ternaryCheckCity(city) {
  return (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
  case 'not as generous':
      return "Thank you.";
  default:
      return "Bye.";
  }
}

console.log(scuberGreetingForFeet(2000)); 
console.log(ternaryCheckCity("Nakuru")); 
console.log(switchOnCharmFromTip("kind"));
