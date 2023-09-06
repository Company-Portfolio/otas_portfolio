<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- logo -->
    <!-- <router-link to="/" class="navbar-brand mx-3" href=""><img src="./assets/logo.png" alt="logo" width="70" height="60"></router-link> -->

    <!-- collapse btn -->
    <button class="navbar-toggler me-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- collapse section -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </nav>
  
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
