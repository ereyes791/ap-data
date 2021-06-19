<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="hero-jumbotron">
          <div class="hero-jumbotron__img">
            <img src="~/assets/programing-logo.png" width="75px">
          </div>
          <div class="hero-jumbotron__wrapper">
            <span class="hero-jumbotron__title">Materia:</span>
            <span class="hero-jumbotron__subject">{{ subject }}</span>
            <p class="hero-jumbotron__description">{{ description }}</p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="6">
        <img src="//www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1LDo4pJ3N3gySje4DeoQcI/348bfb66dd3cd2c0d30a84cf5119de5a/programming.jpg" width="100%">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{
    subject() {
      return this.$store.state.content.subject;
    },
    description(){
      return  this.$store.state.content.description;
    }
  }
}
</script>

<style lang="scss">
  .hero-jumbotron{
    display: flex;
    flex-direction: row;
    color:$blue-black-color;
    &__wrapper{
      display: flex;
      flex-direction: column;
      margin-left: 2.5rem;
    }
    &__title{
      color: $cobalt-color;
      font-size: x-large;
      line-height:2.3rem;
      text-transform: uppercase;
    }
    &__subject{
      font-size:2.5rem;
      font-weight:200 ;
    }
    &__description{
      text-align:justify ;
      font-weight:200 ;
    }
  }
  #content-card{
    background-color: $cool-gray-color;
    *{
      color:$blue-black-color;
    }
  }

</style>
