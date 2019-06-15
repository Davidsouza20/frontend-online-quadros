<template>
  <div>
    <h3>Editar um carro</h3><br>
    <form v-bind:car="car" class="form-group align-content-center" @submit.prevent="editCar">
      <label for="">Escolha a marca</label>
      <select class="form-control" v-model="marca">
        <option :value="brand.marca" :key="brand.id" v-for="brand in brands">{{brand.marca}}</option>
      </select><br>
      <input class="form-control" type="text" v-model="modelo" name="title" placeholder="Modelo"><br>
      <input class="form-control" type="text" v-model="year" name="title" placeholder="Ano"><br>
      <input  type="submit" value="Editar" class="btn">
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "EditCar",
  props: ["car"],
  data() {
    return {
        //id: "",
        marca: "",
        modelo: "",
        year: "",
        brands: []
        } 
  },
  methods: {
    editCar(e) {
      e.preventDefault();
      const newCar = {
        //id: this.id,
        marca: this.marca,
        modelo: this.modelo,
        year: this.year,
      }

      // Send up to parent
      this.$emit('edited-car', newCar);

      this.marca = ""
      this.modelo = ""
      this.year = ""
    },
    },
    mounted() {
     //get the brands 
      axios.get('https://my-json-server.typicode.com/davidsouza20/api1/brand')
      .then(res => this.brands = res.data)
      
      .catch(err => console.log(err));
  }
 
  }
</script>
<style scoped>
  div {
    padding: 30px;
  }
</style>



