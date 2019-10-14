
window.addEventListener("load", function() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.location.href="./project.html";
    } else {
      width++; 
      elem.innerHTML = width * 1  + '%';
    }
  }
});

var horizontals = document.querySelectorAll(".end__section--horizontal");
  let wheel = document.getElementById('wheel')


  horizontals.forEach(function (horizontal) {
    var inner = horizontal.querySelector(".end__section__inner");
    window.addEventListener("scroll", function () {
      window.requestAnimationFrame(function () {
        var toGo = horizontal.offsetHeight - window.innerHeight;
        var position = window.scrollY - horizontal.offsetTop;
        var progression = position / toGo;

        if (progression > 0 && progression < 1) {
          console.log(progression)
          wheel.style.transform = 'rotate('+ -27 + 360 * progression +'deg)'

          horizontal.classList.add("end__section--isFixed");

        } else {
          // horizontal.classList.remove("end__section--isFixed");
        }
        if (progression >= 1) {
          horizontal.classList.add("end__section--isScrolled");

        } else {
          horizontal.classList.remove("end__section--isScrolled");

        }
      });
    });
  });
/*var button = document.getElementById('next-page');
button.addEventListener(click, function(){
    load();
})*/