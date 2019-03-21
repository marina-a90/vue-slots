<template>
  <div id="app">
    <h1>Slots</h1>
    <car brand="mercedes" model="limuzina"/>

    <hr>

    <car brand="opel" model="kadet">
      <!-- <car brand="opel"> -->
      <p style="color: green">Kadet</p>
    </car>



    <base-layout>

      <template slot="header">
        <h1>Header</h1>
        <p>bla</p>
      </template>

      <template>
        <h3>default</h3>
      </template>

      <template slot="footer">
        <h6>footer</h6>
      </template>

    </base-layout>

  </div>
</template>

<script>
import Car from "./components/Car";
import BaseLayout from "./components/BaseLayout";

export default {
  name: "app",
  components: {
    Car,
    BaseLayout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
