
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "";
  }
  let searchBox = document.querySelector('.searchBox');
  let searchClose = document.querySelector('.searchClose');
  let search = document.querySelector('.search');
  search.onclick =()=>searchBox.classList.add('active');
   searchClose.onclick=()=>searchBox.classList.remove('active');