<template>
  <v-card
    id="content-card">
    <section class="card-rows">
      <paper-widget/>
    </section>
  </v-card>
</template>

<script>
import paperWidget from '~/components/widgets/paper-widget.vue';
  export default {
    components:{
      paperWidget
    }
  }
</script>

<style>

</style>
