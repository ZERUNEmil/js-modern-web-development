const NavbarWhenAuthenticated = `<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2" id="navBar">
<a class="navbar-brand" href="/">MyCMS</a
><button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link" href="#">Home</a>    
    <a class="nav-item nav-link" href="#">List</a>
    <a class="nav-item nav-link" href="#">Logout</a>
  </div>
</div>
</nav>`;

const NavbarWhenNotAuthenticated = `<nav class="navbar navbar-expand-lg navbar-light bg-light mb-2" id="navBar">
<a class="navbar-brand" href="/">MyCMS</a
><button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <a class="nav-item nav-link" href="#">Home</a>
    <a class="nav-item nav-link" href="#">Register</a>
    <a class="nav-item nav-link" href="#">Login</a> 
  </div>
</div>
</nav>`;

let isAuthenticated = false;
let navBar = document.querySelector("#navBar");

const Navbar = () => {
  if (isAuthenticated) return (navBar.innerHTML = NavbarWhenAuthenticated);
  else return (navBar.innerHTML = NavbarWhenNotAuthenticated);
};

export default Navbar;