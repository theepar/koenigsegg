function animscrollup1() {
  var anims = document.querySelectorAll(".animscrollup1");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollup1);

function animscrollup2() {
  var anims = document.querySelectorAll(".animscrollup2");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollup2);

function animscrollup3() {
  var anims = document.querySelectorAll(".animscrollup3");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollup3);

function animscrollup4() {
  var anims = document.querySelectorAll(".animscrollup4");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollup4);

function animscrollright() {
  var anims = document.querySelectorAll(".animscrollright");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollright);

function animscrollleft() {
  var anims = document.querySelectorAll(".animscrollleft");
  for (var i = 0; i < anims.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = anims[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      anims[i].classList.add("active");
    } else {
      anims[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", animscrollleft);
