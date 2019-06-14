<template>
  <div class="todo-item">
    <p>{{car.marca}}, {{car.modelo}}, {{car.year}}
      <button @click="$emit('del-car', car.id)" class="btn btn-danger btn-sm pull-right margin red">x</button>
      <button @click="editCarSendEvent" class="btn btn-warning btn-sm pull-right margin yellow">Edit</button>
      </p>  
  </div>
</template>
                               
<script>
import EventBus from '../event-bus';

export default {
  name: "CarItem",
  props: ["car"],
  methods: {
    editCarSendEvent() {
      EventBus.$emit('edit-car', this.car);
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    margin: 10px;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .margin {
    margin: 0 5px;
  }

  .yellow {
    background-color: yellow;
    color:#000;
  }

  .red {
    background-color: red;
  }
</style>

