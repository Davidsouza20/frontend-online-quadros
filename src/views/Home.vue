<template>
  <div id="app">
    <AddCar v-if="!isEdit" v-on:add-car="addCar"/>
    <EditCar v-if="isEdit" @click="editCar"/>
    <Cars v-bind:cars="cars" v-on:del-car="deleteCar"/>
  </div>
</template>




<script>
import Cars from "../components/Cars";
import AddCar from "../components/AddCar";
import EditCar from "../components/layout/EditCar";
//import {bus} from '../main';
import axios from "axios";

export default {
  name: "Home",
  components: {
    Cars,
    AddCar,
    EditCar
  },
  data() {
    return {
      cars: [],
      isEdit: false
      
    };
  },
  

  //Ajax calls to the API
  methods: {
    //Delete a Car
    deleteCar(id, i) {
      axios
        .delete(`http://localhost:8000/carros/${id}`)
        .then(res => {
          this.cars.splice(i, 1);
        })

        /*this.cars = this.cars.filter(car => car.id !== id))*/
        .catch(err => console.log(err));
    },
    //Add a Car
    addCar(newCar) {
      const data = Object.entries(newCar)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join("&");

      const options = {
          headers: { "content-type": "application/x-www-form-urlencoded" },};
      axios.post("http://localhost:8000/carros", data, options)
          .then(res =>  this.cars.unshift(res.data))  
          .catch(err => console.log(err));
      
    },

    //Update a car
    editCar() {
      this.isEdit = true;
      alert("test");
    } 
  },

  //Display the list of Cars
  created() {
    //get the cars
    axios
      .get("http://localhost:8000/carros")
      .then(res => (this.cars = res.data))
      .catch(err => console.log(err));    

      window.eventBus.$on('edit-car');
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
