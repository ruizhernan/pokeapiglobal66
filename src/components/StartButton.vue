<template>
    <button @click="$emit('click')" class="start-button">
      Get started
    </button>
  </template>
  
  <script>
  export default {
    name: "StartButton",
  };
  </script>
  
  <style scoped>
  .start-button {
    background-color: rgb(242, 37, 57);
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-weight:lighter;
    margin-top: 2em;
    font-size: 1em;
  }
  .start-button:hover{
    background-color: rgb(192, 14, 32);
  }
  </style>
  