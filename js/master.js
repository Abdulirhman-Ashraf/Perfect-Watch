// menu for li links
let menu =document.querySelector("ul  #menu");
let lis =document.querySelectorAll("ul li a");
menu.onclick=function(){
  for(let i=0;i<lis.length;i++)
  lis[i].classList.toggle("hidden")
}

// up
let up = document.querySelector(".up");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 400) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

window.addEventListener("scroll", myScrollFunc);

// dark mode

let btnDark = document.getElementById("dark");
btnDark.onclick = function () {
  document.querySelector(".sectionOne").classList.toggle("dark");
  document.querySelector(".sectionTwo").classList.toggle("dark");
  document.querySelector(".sectionThree").classList.toggle("dark");
  document.querySelector(".sectionFour").classList.toggle("dark");
  document.querySelector(".sectionOne .left h2").classList.toggle(".darkH2");
};
//start date and time
let counter = document.getElementById("counter");
let time = document.querySelectorAll(".time");

setInterval(() => {
  let date = new Date();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let hour = date.getHours();
  let day = date.getDate();
  time[0].innerHTML = day + " Days";
  time[1].innerHTML = hour + " Hours";
  time[2].innerHTML = min + " Mins";
  time[3].innerHTML = sec + " Secs";
}, 1000);

//end date and time

////////////////////////////////////////////////////////////////////////////////

//start slider
let sliderImages = document.querySelectorAll(".slider-images img");
let next = document.querySelector("#next");
prev = document.querySelector("#prev");
let currentItem = 0;

// next button
next.addEventListener("click", () => {
  if (currentItem == sliderImages.length - 1) {
    next.classList.add("disable");
  } else {
    prev.classList.remove("disable");

    removeActive();
    sliderImages[currentItem + 1].classList.add("active");
    currentItem++;
  }
});
// prev button
prev.addEventListener("click", () => {
  if (currentItem != 0) {
    removeActive();
    next.classList.remove("disable");

    sliderImages[currentItem - 1].classList.add("active");
    currentItem--;
  } else {
    prev.classList.add("disable");
  }
});

// remove active class function
function removeActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
}

// end slider
////////////////////////////////////////////////////////////////////////////////
// Start textArea
let limit = document.querySelector("#lettersLimit");
let textArea = document.querySelector("#textArea");
function textLimit() {
  limit.innerHTML = `Total Character : ${textArea.value.length} <br>
   Remaining Character : ${
    250 - textArea.value.length
  }`;
}
