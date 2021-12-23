function validateF() {
    var name = document.fn.name.value;
    var expiry = document.fn.expiry.value;
    var email = document.fn.email.value;

    if (name == null || name == "") {
        alert("Please enter a name!");
        return false;
    } else if (expiry.length > 7) {
        alert("The max-length for expiration date must be 7 characters.");
        return false;
    } else if (email == "") {
        alert("Please enter your Email!");
        return false;
    } else {
        document.write("<center><b>Your form was successfully submitted.</b></center>");
    }
}

function myFunction() {
    const inpObj = document.getElementById("fn");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}


