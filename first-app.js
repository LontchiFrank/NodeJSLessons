var name = "Max";
var age = 23;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    `Name is` +
    userName +
    `, age is` +
    userAge +
    ` and the user hobbies: ` +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
