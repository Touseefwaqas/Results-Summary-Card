let scores = document.querySelectorAll(".detailed-scores");
let category = document.querySelectorAll(".score-boxes .name");
let img = document.querySelectorAll(".sign-heading img");


fetch("./data.json")
.then(res => res.json())
.then(data => {
    data.map((item, index) => {
        scores[index].insertAdjacentHTML('afterbegin', item.score);
        category[index].innerHTML = item.category;
        img[index].src = item.icon;
    })
});
