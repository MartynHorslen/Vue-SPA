<script>
export default {

}
</script>

<template>
<div class="logo"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png" alt="Premier League"></div>
<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-purple mt-2">
  <div class="container-fluid">
    <h1 class="navbar-brand" href="#">{{ $route.name }}</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <router-link to="/">News</router-link>
        <RouterLink to="/table">Table</RouterLink>
        <RouterLink to="/fixtures">Fixtures</RouterLink>
        <RouterLink to="/results">Results</RouterLink>
    </div>
  </div>
</nav>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 100vh;
  max-width: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
.logo img {
  width: 300px;
  height: auto;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

.nav-active {
  display:none;
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
  margin-top: 0.5rem;
}
.navbar-collapse a {
  flex: 1;
  color: #fff;
  /* border: 1px solid white; */
  border-radius: 5px;
  text-align: center;
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

.navbar-dark .navbar-toggler {
  border-color: rgba(255,255,255,.5);
}
.navbar-toggler:focus {
  box-shadow: 0 0 0 0.1rem;
}

@media (min-width: 576px) {
  .navbar-collapse.show, .collapsing {
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 0.5rem;
  }
  .navbar-collapse a {
    flex: 1;
    gap: 15px;
    text-align: center;
    padding-left: 1rem;
    border: 1px solid transparent;
  }

  .navbar-collapse a:hover {
    border-color: orange;
  }
}

@media (min-width: 768px) {
  .navbar-brand {
    display: none;
  }
  .navbar-collapse {
    gap: 15px;
  }

  nav .navbar-collapse a.nav-active {
    display: block;
    color: orange;
    border: 1px solid;
    border-color: orange;
  }
  nav .navbar-collapse a.nav-active:hover, nav .navbar-collapse a:hover {
    background-color: rgb(95, 63, 122);
  }
}
</style>
