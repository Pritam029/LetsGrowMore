let box = document.getElementById("cards");

let API = async() => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="poster">
        <div class="poster-image">
            <img src="bg-1.jpg" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="poster-content">
            <h3>${element.first_name} ${element.last_name}</h3>
            <h2>${element.email}</h2>
        </div>
    </div>`;
        })
        .join("");
    posters.innerHTML = info;
};
let navBtn = document.getElementById("nav-btn");
navBtn.addEventListener("click", () => {
    posters.innerHTML = `<h1 class='load'></h1>`;
    setTimeout(() => {
        API();
    }, 300);
})