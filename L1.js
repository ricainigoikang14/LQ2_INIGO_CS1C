//a
(age >= 18 && genAverage >= 85) ? console.log("You may enter College, under BSCS Program") : console.log("Both conditions may have not met and not allowed to enroll");

//b
(subject === "DSA" && grade >= 80) ? console.log("You may enroll Application Development") : (subject === "Math101" && grade <= 80) ? null : (console.log("You may enroll Calculus"), console.log("You have to enroll DSA and pass to enroll AD and Math 101 and pass to enroll Calculus"));
