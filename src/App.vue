<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header>
    <div class="wrapper">
      <div class="logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" alt="Premier League"></div>
    </div>
    <div class="wrapper">
      <nav class="navbar navbar-expand-sm navbar-dark bg-purple mt-2">
        <div class="container-fluid">
          <h1 class="navbar-brand" href="#">{{ $route.name }}</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- <ul class="navbar-nav mb-2 mb-lg-0"> -->
              <router-link to="/" class="btn">News</router-link>
              <RouterLink to="/teams">Teams</RouterLink>
              <RouterLink to="/table">Table</RouterLink>
              <RouterLink to="/competitions">Competitions</RouterLink>
              <RouterLink to="/fixtures">Fixtures</RouterLink>
              <RouterLink to="/results">Results</RouterLink>
              <RouterLink to="/transfers">Transfers</RouterLink>
            <!-- </ul> -->
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  max-width: 100%;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 60%;
  margin: 0 auto;
}
.logo img {
  width: 100%;
  height: auto;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

.navbar-brand {
  font-size: 1.5rem;
  margin-bottom: 0;
}

.bg-purple {
  background-color: #3d195b;
}
.navbar-collapse.show, .collapsing {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 0;
  justify-content: center;
}
.navbar-collapse a {
  flex: 1 1 150px;
  color: #fff;
  /* border: 1px solid white; */
  border-radius: 5px;
  text-align: left;
  padding-left: 0;
}

.navbar-collapse a:hover {
  color: orange;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

.navbar-toggler:focus {
  box-shadow: 0 0 0 0.1rem;
}

@media (min-width: 576px) {
  .navbar-brand {
    display: none;
  }
}
</style>
