<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Editar libros</h2>

      </div>

    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <form @submit="onSubmit">
              <div class="form-group row">
                <label for="title" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="Title" name="title" class="form-control" value="" v-model.trim="form.title">
                </div>
              </div>
              <div class="form-group row">
                <label for="descri" class="col-sm-2 col-form-label">Description</label>
                <div class="col-sm-6">
                  <textarea name="descri" rows="3" placeholder="Description" class="form-control" cols="80" v-model.trim="form.descri"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <label for="other" class="col-sm-2 col-form-label">Other</label>
                <div class="col-sm-6">
                  <input type="text" placeholder="other"  class="form-control" name="other" value="" v-model.trim="form.other">
                </div>
              </div>
              <div class="row">
                <div class="col text-left">
                  <b-button type="submit" variant="primary"> Editar </b-button>
                  <b-button type="submit"  class="btn-large-space" :to="{ name: 'ListBook' }"> Cancelar </b-button>

                </div>

              </div>
            </form>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data(){
    return{
      bookId: this.$route.params.bookId,
      form:{
        title: '',
        descri:'',
        other:''
      }
    }
  },
  methods:{
    onSubmit(evt){
      evt.preventDefault()
      const path = `${process.env.BASE_URI}books/${this.bookId}/`
      console.log(path);
      axios.put(path, this.form).then((response)=>{
        this.form.title = response.data.title
        this.form.descri = response.data.descri
        this.form.other = response.data.other

        swal('book updated', '', 'success')
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  ,
    getBook(){
      const path = `http://localhost:8000/api/v1/books/${this.bookId}/`
      console.log(path);
      axios.get(path).then((response)=>{
        this.form.title = response.data.title
        this.form.descri = response.data.descri
        this.form.other = response.data.other
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
  created(){
    this.getBook()
  }

  }

</script>

<style lang="css" scoped>
</style>
