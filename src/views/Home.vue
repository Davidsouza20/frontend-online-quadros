<template>
  <div id="app">
    <AddCar v-if="!isEdit" v-on:add-car="addCar"/>
    <Cars v-bind:cars="cars" v-on:del-car="deleteCar" @car="editCar" />
  </div>
</template>




<script>
import Cars from "../components/Cars";
import AddCar from "../components/AddCar";
import EditCar from "../components/EditCar";
import EventBus from '../event-bus';
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
    deleteCar(id, i) {
      axios.delete(`http://localhost:8000/carros/${id}`)
        .then(res => {this.cars.splice(i, 1);})
        .catch(err => console.log(err));
    },
 
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


    editCar(newCar, id) {
      
       const data = Object.entries(newCar)
        .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
        .join("&");

        const options = {
          headers: { "content-type": "application/x-www-form-urlencoded" },};
      axios.put(`http://localhost:8000/carros/${id}`, data, options)
          .then(res => this.cars.splice(id, 0, res.data))
          .catch(err => console.log(err));

        //this.cars.splice(id, 1);

      
      console.log(newCar);
    } 
  },

  //Display the list of Cars
  created() {

    axios
      .get("https://project-nodejs-2.herokuapp.com/cars")
      .then(res => (this.cars = res.data))
      .catch(err => console.log(err));    
   
  },

  updated() {

    axios
      .get("http://localhost:8000/carros")
      .then(res => (this.cars = res.data))
      .catch(err => console.log(err));    
    //this.EventBus.$on('edit-car', {});
   
  },
  mounted() {
      //EventBus.$on('updated-cars', (updatedCar) => {
         // alert("car Updated");})
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
