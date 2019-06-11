
var link = document.querySelector(".search-hotel a");
var hide = document.querySelector("form.search");

link.addEventListener("click", function (evt) {
evt.preventDefault();


hide.classList.toggle("search-hide");
hide.classList.toggle("search-show");


});
