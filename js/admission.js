// Script for admission
function html() {
    let text1;
    let person1 = prompt("Please enter your name:", "");
    if (person1 == null || person1 == "") {
        text1 = "User cancelled the prompt";
    } else {
        text1 = "Hello " + person1 + "<br><br>" + "Welcome to Sense Solutions Academy" + "<br>" + "Below are the requirements for HTML course:" + "<br><br>" + "1. Mobile phone" + "<br>" + "2. Strong Internet" + "<br>" + "3. Trebedit App or VS Code" + "<br>" + "4. Free Course"
    }
    document.getElementById("demo").innerHTML = text1;
}


function css() {
    let text2;
    let person2 = prompt("Please enter your name:", "");
    if (person2 == null || person2 == "") {
        text2 = "User cancelled the prompt";
    } else {
        text2 = "Hello " + person2 + "<br><br>" + "Welcome to Sense Solutions Academy" + "<br>" + "Below are the requirements for CSS course:" + "<br><br>" + "1. Laptop / Mobile Phone" + "<br>" + "2. Strong Internet" + "<br>" + "3. VS Code" + "<br>" + "4. Course is N3,000"
    }
    document.getElementById("demo").innerHTML = text2;
}

// Script for the send button
function send() {
    document.getElementById("success").innerHTML = "Your registration was successful, we will review and reach out to you in 24 hours."
}