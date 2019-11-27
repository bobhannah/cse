/* 
//When the user clicks on the button, toggle between hiding and showing the dropdown content
function dailyObjectives() {document.getElementById("dailyObjectives").classList.toggle("show");}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/

function allDailyObjectives() {document.getElementById("allDailyObjectives").classList.toggle("show");}
function allSchoolResources() {document.getElementById("allSchoolResources").classList.toggle("show");}
function APResources() {document.getElementById("APResources").classList.toggle("show");}
