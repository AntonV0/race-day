// Random race number assigment.
let raceNumber = Math.floor(Math.random() * 1000);

// Runner age and is the runner early registered? The values can be changed to test.
const runnerEarly = true;
const runnerAge = 18;

// Race number control flow statement - is runner an adult and registered early?
if (runnerEarly === true && runnerAge >= 18) {
  raceNumber += 1000;
} 
console.log(`Your number for this race is ${raceNumber}.`);

// Race time
if (runnerEarly === true && runnerAge > 18) {
  console.log(`Hello ${raceNumber}, you will race at 9:30 am.`);
} else if (runnerAge > 18) {
  console.log(`Hello ${raceNumber}, you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Hello ${raceNumber}, you will race at 12:30 pm.`);
} else {
  console.log(`Hello ${raceNumber}, please visit the Registration Desk.`);
}