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
        <ToDoList :todos="todos">
          <div slot-scope="todoProps">
            <h3>{{ todoProps.todo.text }}</h3>
            <h4>{{ todoProps.todo.isCompleted ? "👍" : "👎" }}</h4>
          </div>
        </ToDoList>
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
import ToDoList from "./components/ToDoList";

export default {
  name: "app",
  components: {
    Car,
    BaseLayout,
    ToDoList
  },
  data() {
    return {
      todos: [
        { id: 1, text: "1. todo", isCompleted: false },
        { id: 2, text: "2. todo", isCompleted: false },
        { id: 3, text: "3. todo", isCompleted: true }
      ]
    };
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
