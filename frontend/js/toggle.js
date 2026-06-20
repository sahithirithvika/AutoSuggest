const image = document.getElementById("user-image");
const nameText = document.getElementById("user-name");
const genderText = document.getElementById("gender");
const toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", function () {

    if (genderText.textContent === "Male") {

        image.src="../images/jane.png";
        nameText.textContent = "Jane Doe";
        genderText.textContent = "Female";

    } else {

        image.src = "../images/john.png";
        nameText.textContent = "John Doe";
        genderText.textContent = "Male";

    }

});