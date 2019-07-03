<template lang="html">
  <div class="container">
      <div class="row">
        <div class="col">
          <form @submit='onSubmit'>
            <h2>Añadir nuevo libro</h2>
            <input type="text" name="title" placeholder="Titulo" class="form-control" value="" v-model.trim="form.title">
            <textarea name="descri" placeholder="Description" rows="3" class="form-control" cols="80" v-model.trim="form.descri"></textarea>
            <input type="text" name="other" placeholder="Other" class="form-control" value="" v-model.trim="form.other">
            <div class="row">
              <div class="col text-left">
                <b-button type="submit" variant="primary"> Guardar </b-button>
                <b-button type="submit"  class="btn-large-space" :to="{ name: 'ListBook' }"> Cancelar </b-button>

              </div>

            </div>
          </form>
        </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
export default {
  data(){
    return{
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
      const path = `${process.env.BASE_URI}books/`
      console.log(path);
      axios.post(path, this.form).then((response)=>{
        this.form.title = response.data.title
        this.form.descri = response.data.descri
        this.form.other = response.data.other

        swal('New Book created', '', 'success')
      })
      .catch((error)=>{
        console.log(error)
        swal('el libro no ha sido creado','','error')
      })
    }
  }

}
</script>

<style lang="css" scoped>
</style>
