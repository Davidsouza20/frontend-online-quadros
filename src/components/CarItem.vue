<template>
  <div class="todo-item">
    <p>{{car.marca}}, {{car.modelo}}, {{car.year}}
      <button @click="$emit('del-car', car.id)" class="btn btn-danger btn-sm pull-right margin red">x</button>
      <button @click="isActive" class="btn btn-warning btn-sm pull-right margin yellow">Edit</button>
      </p>  
      <span v-if="show">
      <EditCar @edited-car="updateCar" />
      </span>
  </div>
</template>
                               
<script>
import EventBus from '../event-bus';
import EditCar from '../components/EditCar'
import axios from "axios";

export default {
  data: function() {
    return {
      show: false,
        carros: []
    }
  },  
  components: {
    EditCar
  },
  name: "CarItem",
  props: ["car"],

  methods: {
    updateCar(newCar) {
      const id =  this.car.id;
      this.$emit('car', newCar, id);
      this.show = false;
    },
    isActive() {
      this.show = !this.show
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

