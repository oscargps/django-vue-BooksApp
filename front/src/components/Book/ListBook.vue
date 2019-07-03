<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Listado de libros</h2>
         <b-button size="sm" :to="{name: 'NewBook'}" variant="primary" >Nuevo  </b-button>
        <div class="col-md-12">
        <b-table striped hover :items="books" :fields="fields" >

          <template slot="action" slot-scope="data">
            <b-button size="sm" variant="primary" :to="{ name:'EditBook', params: {bookId: data.item.id} }">Editar </b-button>
            <b-button size="sm" variant="danger" :to="{ name:'DeleteBook', params: {bookId: data.item.id} }">Eliminar </b-button>
          </template>


        </b-table>

          </div>

        </div>
      </div>
    </div>

</template>

<script>

import axios from 'axios';
export default {
  data () {
    return {
      fields: [
        { key: 'title', label: 'Título' },
        { key: 'descri', label: 'Descripción' },
        {key: 'other', label: 'Otro'},
        { key: 'action', label: '' }
      ],
      books: []
    }
  },
  methods:{
    getBooks(){
      const path = `${process.env.BASE_URI}books/`
      console.log(path)
      axios.get(path).then((response)=>{
        this.books = response.data
      }).catch((error) => {console.log(error)})
    }
  },
  created(){
    this.getBooks()
  }
}
</script>

<style lang="css" scoped>
</style>
