<template>
  <div>
    <div v-bind:key="car.id" v-for="(car, i) in cars" @carEdited="test">
      <CarItem v-bind:car="car" v-on:del-car="$emit('del-car', car.id, i)" @edited-car="test"/>
    </div>
  </div>
</template>

<script>
import CarItem from './CarItem.vue';

export default {
  data() {
    return {
    }
  },
  name: "Cars",
  components: {
    CarItem
  },
  props: ["cars"], 
  methods: {
    test(editedCar) {
      alert(editedCar);
    }
  }
}
</script>

<style scoped>

</style>

