document.querySelector("#toggle").addEventListener("click", function() {
  this.classList.toggle('on');
  document.querySelector("#resize").classList.toggle("active");
});

document.querySelectorAll("#resize ul li a").forEach(function(link) {
  link.addEventListener("click", function() {
    this.classList.toggle('on');
    document.querySelector("#resize").classList.toggle("active");
  });
});

document.querySelector(".close-btn").addEventListener("click", function() {
  this.classList.toggle('on');
  document.querySelector("#resize").classList.toggle("active");
});
