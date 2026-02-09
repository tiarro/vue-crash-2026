<script>
  export default {
    data() {
      return {
        name: 'Tiarro Elprida',
        status: 'pending',
        tasks: ['Task one', 'Task two', 'Task three'],
        link: 'https://www.google.com/',
      };
    },
    methods: {
      toggleStatus() {
        if(this.status === 'active') {
          this.status = 'pending'
        } else if (this.status === 'pending') {
          this.status = 'inactive'
        } else {
          this.status = 'active'
        }
      }
    }
  };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">Status is {{ status }}</p>
  <p v-else-if="status === 'pending'">Status is {{ status }}</p>
  <p v-else>Status is inactive</p>

  <h3>Tasks: </h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <!-- <a target="_blank" v-bind:href="link">Click for google</a> -->
   <a target="_blank" :href="link">Click for google</a>
  <br/>
  
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
     <button @click="toggleStatus">Change Status</button>
</template>

<style scoped></style>
