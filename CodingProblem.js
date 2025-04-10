let name = prompt("Please enter your name:");
let address = prompt("Please enter your address:");
let age = parseInt(prompt("Please enter your age:"));
let classRole = prompt("Please enter your class role (Officer, Student, Teacher):");
let course = prompt("Please enter your course (BSCS, BSM, BAEL):");


switch (course) {
    case "BSCS":
        if (classRole === "Officer") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Student") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Teacher") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else {
            alert("Role not recognized. Please enter Officer, Student, or Teacher.");
        }
        break;

    case "BSM":
        if (classRole === "Officer") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Student") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Teacher") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else {
            alert("Role not recognized. Please enter Officer, Student, or Teacher.");
        }
        break;

    case "BAEL":
        if (classRole === "Officer") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Student") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else if (classRole === "Teacher") {
            for (let i = 0; i < age / 4; i++) {
                alert(name);
            }
        } else {
            alert("Role not recognized. Please enter Officer, Student, or Teacher.");
        }
        break;

    default:
        alert("Course not recognized. Please enter BSCS, BSM, or BAEL.");
}
