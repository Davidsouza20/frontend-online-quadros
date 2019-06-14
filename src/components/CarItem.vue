<template>
  <div class="todo-item">
    <p>{{car.marca}}, {{car.modelo}}, {{car.year}}
      <button @click="$emit('del-car', car.id)" class="btn btn-danger btn-sm pull-right margin red">x</button>
      <button @click="isActive" class="btn btn-warning btn-sm pull-right margin yellow">Edit</button>
      </p>  
      <span v-if="ok">
      <EditCar/>
      </span>
  </div>
</template>
                               
<script>
//import EventBus from '../event-bus';
import EditCar from '../components/EditCar'
export default {
  components: {
    EditCar
  },
  name: "CarItem",
  props: ["car"],
  data: {
   
  },
  methods: {
  
      
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

