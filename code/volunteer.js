function validateF1() {
    var fname = document.fn1.fname.value;
    var lname = document.fn1.lname.value;
    var email = document.fn1.email.value;
    var password = document.fn1.password.value;
    var age = document.fn1.age.value;

    if (fname == "") {
        alert("Please enter your first name!");
        return false;

    } else if (lname == "") {
        alert("Please enter your last name!");
        return false;

    } else if (password.length < 5) {
        alert("Password must at least be 5 characters.");
        return false;

    } else if (email == "") {
        alert("Please enter your Email!");
        return false;
    }

    else if (age < 18) {
        alert("You must be at least 18 years of age to volunteer.");
        return false;
    } else {
        document.write("<center><b>Your form was successfully submitted. We'll contact you soon.\n Thank you!</b></center>");
    }

}