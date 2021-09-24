<template>

  <HeaderBar />
  <h1>Heroes App</h1>
  <div class="hero-container">
    <Heroes />
  </div>
</template>

<script>
import Heroes from "@/components/Heroes";
import HeaderBar from "@/components/header-bar";

export default {
  name: 'App',
  components: {
    Heroes, HeaderBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

body, a{color: white !important; text-decoration: none;}
body{padding: 0; margin: 0;}
nav{display: flex; justify-content: space-between; align-items: center; background-color: blue; margin-bottom: 0;}
ul{list-style: none; padding: 0;} 
h1{text-align: start; color: black; padding-left: 10px;}
.hero-container{width: 100%; background-color: rgb(20, 17, 51);}
.message{background-color: blue; padding: 10px; font-weight: bold; text-transform: capitalize;}
.header-bar-links{margin: 0 10px;}
.header-bar-links li{display: inline-block; padding: 0 5px;}
.heroes-list-container{display: flex; flex-flow: row wrap; justify-content: space-around; padding: 10px;}
.hero-list-group {border-radius: 3px; background-color: white; padding: 5px; width: 40%;}
.hero-details div {padding: 8px; text-align: center;} 
.hero-list-name{font-size: 2rem; background-color: green; border-radius: 3px; margin-bottom: 8px;}
.hero-list-name:hover{cursor: pointer;}
.hero-list-group li:nth-child(2){color: black;}
.hero-details label, .hero-details input {display: block; border-radius: 2.5px; width: 200px; margin: auto; text-align: center;
margin-bottom: 7px;}
.actions button {margin: 0 4px;}

@media screen and (min-width: 992px) {
  .hero-container{width: 60%;}
}
</style>
