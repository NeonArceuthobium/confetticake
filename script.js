console.log("website is working");

// Source for library
// https://confettijs.org/confetti.min.js

// Create variables, instantiate `new` instance of `Confetti`
let confetti = new Confetti("confetti");

console.log(confetti);

confetti.destroyTarget(false);
confetti.setSize(10);
confetti.setPower(20);
confetti.setFade(true);
confetti.setCount(100);
