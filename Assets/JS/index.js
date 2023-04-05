function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "../Assets/IMG/menu-hamburguer-btn/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "../Assets/IMG/menu-hamburguer-btn/close_white_36dp.svg";
  }
}

// scroll navbar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});


// show/hide information accordion

const information = document.querySelectorAll(".information");

information.forEach((information) => {
  information.addEventListener("click", () => {
    information.classList.toggle("open");

    // change icon

    let icon = information.querySelector(".information__icon i");
    
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});


// DROPDOWN FORMS SELECTION

function dropDown (position) {
    let element = document.getElementsByClassName('dropDown')[0];
    let display = ['block', 'none']

    element.style.display = display[position]
    setTimeout(function(){
        element.style.transform = 'translate(0px)'
    },0);
}

// seleção de item dropdown

function category (c) {
    let item = document.getElementById('item-' + c).innerHTML;
    document.getElementsByClassName('input__dropdown')[0].value = item
}
