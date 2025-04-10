let username = prompt("Register your Username"); // declare a var that will hold the uname, use a user input method
let password = prompt("Register your passcode"); // declare a var that will hold the pword, use a user input method
let rePassword = prompt("Re-enter your passcode"); // declare a variable that will hold the re-pword, use a user input method

// compare the Registered Password and Re-entered Password
if (password === rePassword) {
    alert("Congratulations on registering!"); // window Pop-up to Congratulate the user for registering.

    let loginUsername = prompt("Username: "); // declare a variable that will hold the uname on Login

    // compare the registered uname and entered uname on Login
    if (loginUsername === username) {
        let loginPassword = prompt("Password: "); // if correct uname, declare a var that will hold the encoded password on Login

        // compare the registered pword and entered pword on Login
        if (loginPassword === password) {
            alert("Welcome to DSA, " + username); // window Pop-up to Congratulate the user of successful Login.
        } else {
            alert("Incorrect Password, Re-run the code!"); // window Pop-up to Inform the user of the incorrect passcode
        }
    } else {
        alert("Incorrect Username, Re-run the code!"); // window Pop-up to Inform the user of the incorrect username
    }
} else {
    alert("Password does not Match, Re-run the code!"); // window Pop-up to inform the regpCode and re-entered pCode does not match
}
