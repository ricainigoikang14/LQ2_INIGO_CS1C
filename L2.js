console.log("You may enroll Calculus");

console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");

if (age >= 18) {
    console.log("You may now Register as a Voter for Elections 2025");
} else {
    console.log("You are too young register as a voter for Elections 2025");
}

if (genAverage >= 85) {
    console.log("You may enroll in all Course Programs");
} else if (genAverage < 85 && genAverage > 80) {
    console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
    console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}
