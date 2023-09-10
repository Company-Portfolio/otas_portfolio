<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- logo -->
    <!-- <router-link to="/" class="navbar-brand mx-3" href=""><img src="./assets/logo.png" alt="logo" width="70" height="60"></router-link> -->
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logoLink">
        <img src="./assets/logo.png" 
          width="70"
          height="60"
          alt="logo">
      </router-link>

      <button
            class="navbar-toggler menus"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span class="navbar-toggler-icon bars"
              ></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarcollapse">
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="mx-2 nav-link">Home</router-link>
            </li>
            <li class="mav-item">
              <router-link to="/about" class="mx-2 nav-link">About</router-link>
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

.nav-link {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  /* color: var(--textFixed-color); */
  padding:20px 0;
  /* background: #141414; */
}

.nav-link:hover,
.nav-link:active,
.nav-link:focus {
  color: rgba(252, 252, 252, 1);
  transition: 0.5s;
}

</style>
