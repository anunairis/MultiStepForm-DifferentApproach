const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");
const formContainer = document.getElementById("form-container");

// ------ TRY THIS, W3 SCHOOL
var currentForm = 0; // Current tab is set to be the first tab (0)
showForm(currentForm); // Display the current tab

function showForm(n) {
    var formFieldset = document.getElementsByClassName("form");
    formFieldset[n].style.display = "block";

    if (n == 0) {
        document.getElementById("previousButton").style.display = "none";
    } else {
        document.getElementById("previousButton").style.display = "inline";
    }
    if (n == (formFieldset.length - 1)) {
        document.getElementById("nextButton").innerHTML = "Submit";
    } else {
        document.getElementById("nextButton").innerHTML = "Next";
    }
    fixStepIndicator(n)
}

// --------- SUBMIT THE FORM ------------
function buttonClick(n) {
    var formFieldset = document.getElementsByClassName("form");

    if (n == 1 && !validateForm()) return false;
    formFieldset[currentForm].style.display = "none";

    currentForm = currentForm + n;
    if (currentForm >= formFieldset.length) {
        formContainer.submit();
        return false;
    }
    showForm(currentForm);
}
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
// });

// ---------- VALIDATE THE FORM FIELDS ----------
function validateForm() {
    var formFieldset = document.getElementsByClassName("form");
    var input = formFieldset[currentForm].getElementsByTagName("input");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const userNameError = name.value.length < 3;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const emailError = !reg.test(email.value);

    const phone = document.getElementById("phone");
    var phoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    var phoneNumberEmpty = phone.value == "";

    const addressError = address.value.length < 5;

    var formFieldset, valid = true;

    // ------- just a try --------------
    if (currentForm === 0) {
        if (input[0] = userNameError) {
            input[0].className += " invalid";
            valid = false;
        }
        if (input[1] = emailError) {
            input[1].className += " invalid";
            valid = false;
        }
    } else if (currentForm === 1) {
        if (input[0].value == !phoneNumber || phoneNumberEmpty) {
            input[0].className += " invalid";
            valid = false;
        }
        if (input[1] = addressError) {
            input[1].className += " invalid";
            valid = false;
        }
    }
    if (valid) {
        console.log(name.value);
        console.log(email.value);
        console.log(phone.value);
        console.log(address.value);
    }
    return valid;
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

// ------- right working solution --------------
// for (i = 0; i < input.length; i++) {
//     if (input[i].value == "") {
//         input[i].className += " invalid";
//         valid = false;
// }