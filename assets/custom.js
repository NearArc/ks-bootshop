/*
  Add here your own custom javascript codes
*/
document.addEventListener('DOMContentLoaded', function() {
  var dropdownSubmenus = document.querySelectorAll('.dropdown-submenu > a');

  dropdownSubmenus.forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var submenu = this.nextElementSibling;
      if (submenu) {
        submenu.classList.toggle('show');
      }
    });
  });
});
