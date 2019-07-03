<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">

        <h3>Esta segurio que desea eliminar este libro?</h3>
        <p>Titulo: {{this.element.title}}</p>
        <p>Description: {{this.element.descri}}</p>
        <p>Other: {{this.element.other}}</p>

      </div>

    </div>
    <div class="row">
      <div class="col">
        <b-button v-on:click="deleteBook" variant="danger"> Eliminar </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'
export default {
  data(){
    return{
        bookId: this.$route.params.bookId,
      element:{

        title:'',
        descri:'',
        other:''
      }
    }
  },
  methods:{
    getBook(){
      const path = `${process.env.BASE_URI}books/${this.bookId}/`
      console.log(path);
      axios.get(path).then((response)=>{
        this.element.title = response.data.title
        this.element.descri = response.data.descri
        this.element.other = response.data.other
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    deleteBook(){
      const path = `http://localhost:8000/api/v1/books/${this.bookId}/`
      axios.delete(path).then((response)=>{
        location.href='/books'
      }).catch(err => {swal('no se pudo eliminar','','error')})
    }
  },
  created(){
    this.getBook()
  }
  }

</script>

<style lang="css" scoped>
</style>
