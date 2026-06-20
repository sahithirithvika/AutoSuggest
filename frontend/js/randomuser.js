const image = document.getElementById("user-image");
const nameElement = document.getElementById("user-name");
const genderElement = document.getElementById("gender");
const button = document.getElementById("random-btn");

button.addEventListener("click", getRandomUser);

async function getRandomUser() {

    const response =
        await fetch("https://randomuser.me/api/");

    const data =
        await response.json();

    const user =
        data.results[0];

    image.src =
        user.picture.large;

    nameElement.textContent =
        user.name.first + " " +
        user.name.last;

    genderElement.textContent =
        user.gender;
}