function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
    document.getElementById("nav-main").style.width = "40%";
    document.getElementById("my-but-image").style.display = "none";
  }

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("nav-main").style.width = "100%";
    document.getElementById("my-but-image").style.display = "block";
    document.getElementById("my-nav-logo").style.width = "100%";
}
