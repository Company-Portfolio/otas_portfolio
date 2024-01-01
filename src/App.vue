<template>
  <nav class="navbar navbar-expand-md navbar-dark navs">
    <!-- logo -->
    <!-- <router-link to="/" class="navbar-brand mx-3" href=""><img src="./assets/logo.png" alt="logo" width="70" height="60"></router-link> -->
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logoLin px-3">
        <img src="./assets/OTASLogoblack.png" 
          width="80"
          height="80"
          alt="logo">
      </router-link>

      <button
            class="navbar-toggler border-0 menus"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
              <img src="./assets/photo/ic_round-menu-open.png" alt="navIcon" width="40" height="40">
           
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarcollapse">
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="mx-2 nav-link navbarTitle text-black">Home</router-link>
            </li>
            <!-- <li class="mav-item">
              <router-link to="/feeconsulting" class="mx-2 nav-link text-dark navbarTitle">Freeconsulting</router-link>
            </li> -->
            <li class="nav-item">
              <router-link to="/aboutus" class="mx-2 nav-link navbarTitle text-black">Aboutus</router-link>
            </li> 
            <li class="nav-item">
              <router-link to="/services" class="mx-2 me-4 nav-link navbarTitle text-black">Service</router-link>
            </li> 
        </ul>
      </div>
    </div>   
  </nav>
  <router-view/>
</template>

<script>

export default {
  setup(){

  }
}
</script>

<style>


body {
  font-family: "Varela Round", sans-serif;
  /* background-color: var(--bg-color); */
  overflow-x: hidden;

  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  -ms-user-select: none;
  user-select: none;
}

.logoLink{
  position: relative;
}


.navbar-toggler:focus {
  box-shadow: none;
}

</style>
