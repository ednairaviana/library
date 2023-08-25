const btnMobile = document.querySelector(".add-book");
const aside = document.querySelector(".aside-grid");

let asideOn = false;

btnMobile.addEventListener("click", () => {
    if(asideOn == false) {
        aside.style.display = "grid";
        asideOn = true;
    } else {
        aside.style.display = "none";
        asideOn = false;
    }
})